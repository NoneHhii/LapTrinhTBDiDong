import { useEffect, useState } from "react";
import { Transaction } from "../screens/HomeScreen";
import { ScreenName } from "../screens/MainAppContent";
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from "react-native";
import { TransactionItem } from "./TransactionItem";
import { styles } from "../constants/styles";
import { formatCurrency } from "../utils/utilMain";
import { CustomAlertDialog } from "./CustomAlertDialog";

export const TrashScreen: React.FC<{
  onNavigate: (screen: ScreenName) => void;
  deletedTransactions: Transaction[];
  loadingDeleted: boolean;
  restoreTransaction: (id: number) => Promise<boolean>;
  hardDeleteTransaction: (id: number) => Promise<boolean>;
  loadDeletedTransactions: () => Promise<void>;
}> = ({ onNavigate, deletedTransactions, loadingDeleted, restoreTransaction, hardDeleteTransaction, loadDeletedTransactions }) => {
  
  const [itemToConfirm, setItemToConfirm] = useState<'restore' | 'hardDelete' | null>(null);
  const [selectedItem, setSelectedItem] = useState<Transaction | null>(null);

  useEffect(() => {
    // Tải danh sách đã xóa khi màn hình được truy cập
    loadDeletedTransactions();
  }, [loadDeletedTransactions]);

  const handleRestore = (item: Transaction) => {
    setSelectedItem(item);
    setItemToConfirm('restore');
  };

  const handleHardDelete = (item: Transaction) => {
    setSelectedItem(item);
    setItemToConfirm('hardDelete');
  };
  
  const handleConfirmAction = async () => {
    if (!selectedItem) return;

    if (itemToConfirm === 'restore') {
      await restoreTransaction(selectedItem.id);
      console.log('Item restored.');
    } else if (itemToConfirm === 'hardDelete') {
      await hardDeleteTransaction(selectedItem.id);
      console.log('Item permanently deleted.');
    }
    setSelectedItem(null);
    setItemToConfirm(null);
  };

  const dialogTitle = itemToConfirm === 'restore' ? 'Xác nhận khôi phục' : 'Xác nhận xóa vĩnh viễn';
  const dialogMessage = itemToConfirm === 'restore' 
    ? `Bạn có muốn khôi phục giao dịch "${selectedItem?.title}" (${formatCurrency(selectedItem?.amount || 0)}) không?`
    : `BẠN CÓ CHẮC CHẮN MUỐN XÓA VĨNH VIỄN giao dịch "${selectedItem?.title}" (${formatCurrency(selectedItem?.amount || 0)}) không? Hành động này không thể hoàn tác.`;
  const dialogConfirmText = itemToConfirm === 'restore' ? 'Khôi phục' : 'XÓA VĨNH VIỄN';
  const dialogConfirmStyle = itemToConfirm === 'restore' ? styles.modalButtonRestore : styles.modalButtonHardDelete;


  const renderDeletedItem = ({ item }: { item: Transaction }) => (
    <View style={styles.deletedItemRow}>
      <TransactionItem 
        item={item} 
        onLongPress={() => {}} // Không làm gì khi long press trong màn hình này
        isDeletedView={true} 
      />
      <View style={styles.deletedActions}>
        <TouchableOpacity onPress={() => handleRestore(item)} style={styles.restoreButton}>
          <Text style={styles.actionButtonText}>Khôi phục</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleHardDelete(item)} style={styles.hardDeleteButton}>
          <Text style={styles.actionButtonText}>Xóa vĩnh viễn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.fullScreen}>
      <Text style={styles.listTitle}>THÙNG RÁC</Text>
      <Text style={styles.trashInfo}>Các khoản mục đã xóa (Soft Delete). Cần đồng bộ API để xóa online.</Text>

      {loadingDeleted ? (
        <ActivityIndicator size="large" color="#4F46E5" style={styles.loading} />
      ) : (
        <FlatList
          data={deletedTransactions}
          renderItem={renderDeletedItem}
          keyExtractor={item => `deleted-${item.id}`}
          ListEmptyComponent={<Text style={styles.emptyText}>Thùng rác trống.</Text>}
          style={styles.list}
        />
      )}
      
      <CustomAlertDialog
        isVisible={!!itemToConfirm && !!selectedItem}
        title={dialogTitle}
        message={dialogMessage}
        onConfirm={handleConfirmAction}
        onCancel={() => { setItemToConfirm(null); setSelectedItem(null); }}
        confirmText={dialogConfirmText}
        confirmStyle={dialogConfirmStyle}
      />
    </View>
  );
};