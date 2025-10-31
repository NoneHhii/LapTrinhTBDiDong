import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../constants/styles";
import { formatCurrency, formatDate, toBool } from "../utils/utilMain";
import { Transaction } from "../screens/HomeScreen";

export const TransactionItem: React.FC<{ 
  item: Transaction;
  onLongPress: (item: Transaction) => void;
  isDeletedView?: boolean; // Cho biết item đang hiển thị trong TrashScreen
}> = ({ item, onLongPress, isDeletedView = false }) => {
  const isExpense = item.type === 'Expense';
  const sign = isExpense ? '-' : '+';
  const color = isExpense ? styles.expenseText.color : styles.incomeText.color;
  
  return (
    <TouchableOpacity
      onLongPress={() => onLongPress(item)}
      // Chỉ áp dụng kiểu deleted nếu nó đang hiển thị ở màn hình khác TrashScreen
      style={[
        styles.itemContainer, 
        isDeletedView ? styles.itemContainerTrash : (toBool(item.isDeleted) && styles.deletedItemContainer)
      ]}
    >
      <View style={styles.itemDateContainer}>
        <Text style={styles.itemDateText}>{formatDate(item.createdAt)}</Text>
      </View>
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemType}>{item.type === 'Expense' ? 'Chi' : 'Thu'}</Text>
        {!toBool(item.isSynced) && (
          <Text style={styles.unsyncedIndicator}>• Chưa đồng bộ</Text>
        )}
      </View>
      <Text style={[styles.itemAmount, { color }]}>
        {sign}{formatCurrency(item.amount)}
      </Text>
    </TouchableOpacity>
  );
};