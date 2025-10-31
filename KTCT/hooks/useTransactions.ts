import { useSQLiteContext } from "expo-sqlite";
import { Transaction } from "../screens/HomeScreen";
import { useCallback, useEffect, useState } from "react";

export interface NewTransactionData {
  title: string;
  amount: number;
  type: 'Income' | 'Expense';
}

export const useTransactions = () => {
  const db = useSQLiteContext();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(false);
  const [deletedTransactions, setDeletedTransactions] = useState<Transaction[]>([]);
  const [loadingDeleted, setLoadingDeleted] = useState(false);


  // Hàm tải dữ liệu (chỉ non-deleted)
  const loadTransactions = useCallback(async () => {
    setLoading(true);
    try {
      // CHỈ LẤY CÁC MỤC CHƯA XÓA (isDeleted = 0)
      const result = await db.getAllAsync<Transaction>('SELECT * FROM transactions WHERE isDeleted = 0 ORDER BY createdAt DESC');
      setTransactions(result);
    } catch (e) {
      console.error("Lỗi khi tải giao dịch:", e);
    } finally {
      setLoading(false);
    }
  }, [db]);

  // Hàm tải các giao dịch đã xóa (cho TrashScreen)
  const loadDeletedTransactions = useCallback(async () => {
    setLoadingDeleted(true);
    try {
      // CHỈ LẤY CÁC MỤC ĐÃ XÓA (isDeleted = 1)
      const result = await db.getAllAsync<Transaction>('SELECT * FROM transactions WHERE isDeleted = 1 ORDER BY createdAt DESC');
      setDeletedTransactions(result);
    } catch (e) {
      console.error("Lỗi khi tải giao dịch đã xóa:", e);
    } finally {
      setLoadingDeleted(false);
    }
  }, [db]);

  useEffect(() => {
    loadTransactions();
  }, [loadTransactions]);

  // Hàm thêm giao dịch
  const addTransaction = useCallback(async (data: NewTransactionData) => {
    try {
      const now = new Date().toISOString();
      const result = await db.runAsync(
        'INSERT INTO transactions (title, amount, type, createdAt, isSynced, isDeleted) VALUES (?, ?, ?, ?, 0, 0)',
        [data.title, data.amount, data.type, now]
      );
      console.log('Giao dịch đã thêm, ID:', result.lastInsertRowId);
      loadTransactions(); // Tải lại danh sách
      return true;
    } catch (e) {
      console.error("Lỗi khi thêm giao dịch:", e);
      return false;
    }
  }, [db, loadTransactions]);
  
  // Hàm xóa giao dịch (Soft Delete)
  const deleteTransaction = useCallback(async (id: number) => {
    try {
      // Đánh dấu đã xóa (isDeleted=1) và chưa đồng bộ (isSynced=0)
      await db.runAsync(
        'UPDATE transactions SET isDeleted = 1, isSynced = 0 WHERE id = ?',
        [id]
      );
      loadTransactions(); // Tải lại danh sách (chỉ non-deleted)
      return true;
    } catch (e) {
      console.error("Lỗi khi xóa giao dịch (soft delete):", e);
      return false;
    }
  }, [db, loadTransactions]);
  
  // Hàm khôi phục giao dịch
  const restoreTransaction = useCallback(async (id: number) => {
    try {
      // Đánh dấu chưa xóa (isDeleted=0) và chưa đồng bộ (isSynced=0)
      await db.runAsync(
        'UPDATE transactions SET isDeleted = 0, isSynced = 0 WHERE id = ?',
        [id]
      );
      loadTransactions(); // Tải lại danh sách chính
      loadDeletedTransactions(); // Tải lại danh sách Thùng rác
      return true;
    } catch (e) {
      console.error("Lỗi khi khôi phục giao dịch:", e);
      return false;
    }
  }, [db, loadTransactions, loadDeletedTransactions]);

  // Hàm xóa vĩnh viễn (Hard Delete)
  const hardDeleteTransaction = useCallback(async (id: number) => {
    try {
      await db.runAsync(
        'DELETE FROM transactions WHERE id = ?',
        [id]
      );
      loadDeletedTransactions(); // Tải lại danh sách Thùng rác
      return true;
    } catch (e) {
      console.error("Lỗi khi xóa vĩnh viễn:", e);
      return false;
    }
  }, [db, loadDeletedTransactions]);

  // Hàm đánh dấu đã đồng bộ
  const markAsSynced = useCallback(async (ids: number[]) => {
    if (ids.length === 0) return;
    const placeholders = ids.map(() => '?').join(',');
    await db.runAsync(`UPDATE transactions SET isSynced = 1 WHERE id IN (${placeholders})`, ids);
    loadTransactions();
    loadDeletedTransactions(); // Cập nhật cả ở thùng rác
  }, [db, loadTransactions, loadDeletedTransactions]);
  
  // Hàm lấy các giao dịch chưa đồng bộ
  const getUnsyncedTransactions = useCallback(async (): Promise<Transaction[]> => {
    // Lấy tất cả các mục chưa đồng bộ, bao gồm cả các mục đã xóa mềm
    const result = await db.getAllAsync<Transaction>('SELECT * FROM transactions WHERE isSynced = 0');
    return result;
  }, [db]);

  return { 
    transactions, 
    loading, 
    loadTransactions, 
    addTransaction, 
    markAsSynced,
    getUnsyncedTransactions,
    deleteTransaction,
    restoreTransaction,
    hardDeleteTransaction,
    deletedTransactions,
    loadDeletedTransactions,
    loadingDeleted
  };
};