import React, { useCallback, useMemo, useState } from "react";
import { useTransactions } from "../hooks/useTransactions";
import { styles } from "../constants/styles";
import { ActivityIndicator, FlatList, RefreshControl, Text, TextInput, TouchableOpacity, View } from "react-native";
import { formatCurrency } from "../utils/utilMain";
import { TransactionItem } from "../components/TransactionItem";
import { ScreenName } from "./MainAppContent";
import { CustomAlertDialog } from "../components/CustomAlertDialog";

export interface Transaction {
  id: number;
  title: string; 
  amount: number; 
  type: 'Income' | 'Expense'; 
  createdAt: string; 
  isSynced: 0 | 1; 
  isDeleted: 0 | 1;
}

export const HomeScreen: React.FC<{ 
  onNavigate: (screen: ScreenName) => void;
  transactions: Transaction[];
  loading: boolean;
  deleteTransaction: (id: number) => Promise<boolean>; // Thêm prop delete
  loadTransactions: () => Promise<void>; // <-- NEW: Để dùng cho RefreshControl
}> = ({ onNavigate, transactions, loading, deleteTransaction, loadTransactions }) => { // <-- Thêm loadTransactions
  
  const [itemToDelete, setItemToDelete] = useState<Transaction | null>(null);
  const [searchTerm, setSearchTerm] = useState(''); // <-- NEW: State cho tìm kiếm
  
  // Logic lọc giao dịch
  const filteredTransactions = useMemo(() => {
    if (!searchTerm) return transactions;
    const lowerCaseSearch = searchTerm.toLowerCase();
    return transactions.filter(t => 
      t.title.toLowerCase().includes(lowerCaseSearch)
    );
  }, [transactions, searchTerm]);
  
  // Tính toán số dư và tổng thu/chi (dựa trên TẤT CẢ giao dịch non-deleted)
  const { balance, totalIncome, totalExpense } = useMemo(() => {
    return transactions.reduce(
      (acc, t) => {
        if (t.type === 'Income') {
          acc.totalIncome += t.amount;
          acc.balance += t.amount;
        } else {
          acc.totalExpense += t.amount;
          acc.balance -= t.amount;
        }
        return acc;
      },
      { balance: 0, totalIncome: 0, totalExpense: 0 }
    );
  }, [transactions]);
  
  const balanceColor = balance >= 0 ? styles.incomeText.color : styles.expenseText.color;

  const handleDeletePress = (item: Transaction) => {
    setItemToDelete(item); // Mở dialog xác nhận xóa
  };

  const handleConfirmDelete = async () => {
    if (itemToDelete) {
      await deleteTransaction(itemToDelete.id); // Gọi soft delete
    }
    setItemToDelete(null); // Đóng dialog
  };
  
  // Logic Pull-to-Refresh
  const [isRefreshing, setIsRefreshing] = useState(false);
  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await loadTransactions();
    setIsRefreshing(false);
  }, [loadTransactions]);

  return (
    <View style={styles.fullScreen}>
      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>TỔNG SỐ DƯ</Text>
        <Text style={[styles.summaryBalance, { color: balanceColor }]}>{formatCurrency(balance)}</Text>
        
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Tổng Thu:</Text>
          <Text style={styles.incomeText}>{formatCurrency(totalIncome)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Tổng Chi:</Text>
          <Text style={styles.expenseText}>{formatCurrency(totalExpense)}</Text>
        </View>
      </View>
      
      <View style={styles.listHeader}>
        <Text style={styles.listTitle}>DANH SÁCH GIAO DỊCH</Text>
        <TouchableOpacity style={styles.addButton} onPress={() => onNavigate('Add')}>
          <Text style={styles.addButtonText}>+ Thêm</Text>
        </TouchableOpacity>
      </View>
      
      {/* Tính năng tìm kiếm */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm theo tên giao dịch..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>
      {/* End Tính năng tìm kiếm */}

      {loading ? (
        <ActivityIndicator size="large" color="#4F46E5" style={styles.loading} />
      ) : (
        <FlatList
          data={filteredTransactions} // <-- Dùng danh sách đã lọc
          renderItem={({ item }) => (
            <TransactionItem 
              item={item} 
              onLongPress={handleDeletePress} // Gán sự kiện Long Press
            />
          )}
          keyExtractor={item => item.id.toString()}
          ListEmptyComponent={<Text style={styles.emptyText}>
            {!searchTerm ? 'Chưa có giao dịch nào.' : 'Không tìm thấy giao dịch nào phù hợp.'}
          </Text>}
          style={styles.list}
          // Pull-to-Refresh
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
              tintColor="#4F46E5"
            />
          }
        />
      )}
      
      <CustomAlertDialog
        isVisible={!!itemToDelete}
        title="Xác nhận xóa"
        message={`Bạn có chắc chắn muốn xóa khoản chi/thu "${itemToDelete?.title}" (${formatCurrency(itemToDelete?.amount || 0)})? Nó sẽ được chuyển vào thùng rác.`}
        onConfirm={handleConfirmDelete}
        onCancel={() => setItemToDelete(null)}
        confirmText="Xóa (Soft Delete)"
        confirmStyle={styles.modalButtonDelete}
      />
    </View>
  );
};

