import React, { useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { ScreenName } from "./MainAppContent";
import { Transaction } from "./HomeScreen";
import { toBool } from "../utils/utilMain";
import { styles } from "../constants/styles";

export const StatsSyncScreen: React.FC<{ 
  onNavigate: (screen: ScreenName) => void; // Dùng kiểu ScreenName đã định nghĩa
  getUnsyncedTransactions: () => Promise<Transaction[]>;
  markAsSynced: (ids: number[]) => Promise<void>;
  transactions: Transaction[];
}> = ({ onNavigate, getUnsyncedTransactions, markAsSynced, transactions }) => {
  const [syncing, setSyncing] = useState(false);
  const unsyncedCount = transactions.filter(t => !toBool(t.isSynced)).length;
  
  // Logic đồng bộ hóa
  const handleSync = async () => {
    setSyncing(true);
    try {
      const unsyncedItems = await getUnsyncedTransactions();
      if (unsyncedItems.length === 0) {
        console.log('Không có giao dịch mới cần đồng bộ.');
        setSyncing(false);
        return;
      }

      // 1. Chuẩn bị dữ liệu để gửi đi
      const dataToSync = unsyncedItems.map(({ id, isSynced, ...rest }) => ({
        ...rest,
        localId: id, // Giữ lại ID cục bộ để đánh dấu sau
      }));

      // 2. Gửi dữ liệu lên MockAPI (sử dụng fetch và mô phỏng thành công)
      console.log(`Đang gửi ${dataToSync.length} giao dịch lên MockAPI...`);
      
      // MÔ PHỎNG API CALL
      // Trong ứng dụng thực tế, bạn sẽ dùng fetch/axios ở đây
      const mockApiResponse = await new Promise(resolve => setTimeout(() => {
        resolve({
          status: 200,
          syncedIds: dataToSync.map(item => item.localId),
        });
      }, 1500)); 
      
      // 3. Xử lý phản hồi và đánh dấu đã đồng bộ trong SQLite
      const response = mockApiResponse as { status: number, syncedIds: number[] };
      
      if (response.status === 200 && response.syncedIds.length > 0) {
        await markAsSynced(response.syncedIds);
        console.log(`Đồng bộ thành công ${response.syncedIds.length} giao dịch!`);
      } else {
        console.log('Đồng bộ thất bại. Vui lòng kiểm tra lại kết nối.');
      }
      
    } catch (e) {
      console.error('Lỗi đồng bộ:', e);
      console.log('Đã xảy ra lỗi trong quá trình đồng bộ.');
    } finally {
      setSyncing(false);
    }
  };
    return (
        <View style={styles.statsContainer}>
            <Text style={styles.listTitle}>ĐỒNG BỘ DỮ LIỆU</Text>
            
            <View style={styles.syncCard}>
                <Text style={styles.syncText}>
                Số giao dịch chưa đồng bộ: <Text style={styles.syncCount}>{unsyncedCount}</Text>
                </Text>
                
                <TouchableOpacity
                style={[styles.syncButton, syncing && styles.syncButtonDisabled]}
                onPress={handleSync}
                disabled={syncing || unsyncedCount === 0}
                >
                {syncing ? (
                    <ActivityIndicator color="#FFFFFF" />
                ) : (
                    <Text style={styles.syncButtonText}>
                    {unsyncedCount > 0 ? `ĐỒNG BỘ (${unsyncedCount})` : 'ĐÃ ĐỒNG BỘ'}
                    </Text>
                )}
                </TouchableOpacity>
            </View>
            
            {/* TODO: Có thể thêm biểu đồ thống kê ở đây */}
            <Text style={styles.statsPlaceholder}>
                Phần thống kê chi tiết (biểu đồ) sẽ được thêm vào sau.
            </Text>
        </View>
    )
}