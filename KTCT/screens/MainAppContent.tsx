import { useCallback, useState } from "react";
import { useTransactions } from "../hooks/useTransactions";
import { HomeScreen } from "./HomeScreen";
import { AddScreen } from "./AddScreen";
import { StatsSyncScreen } from "./StatsSyncScreen";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../constants/styles";
import { TrashScreen } from "../components/TrashScreen";

const SCREENS = {
  Home: HomeScreen,
  Add: AddScreen,
  Stats: StatsSyncScreen,
  Trash: TrashScreen,
};

export type ScreenName = keyof typeof SCREENS;

const TabButton: React.FC<{ 
  icon: string, 
  label: string, 
  active: boolean, 
  onPress: () => void 
}> = ({ icon, label, active, onPress }) => (
  <TouchableOpacity style={styles.tabButton} onPress={onPress}>
    <Text style={styles.tabIcon}>{icon}</Text>
    <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>{label}</Text>
  </TouchableOpacity>
);

/**
 * Component chính quản lý trạng thái và điều hướng.
 */
export const MainAppContent: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('Home');
  const { 
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
  } = useTransactions();

  const handleNavigate = useCallback((screen: ScreenName) => {
    setCurrentScreen(screen);
  }, []);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <HomeScreen 
          onNavigate={handleNavigate}
          transactions={transactions} 
          loading={loading} 
          deleteTransaction={deleteTransaction}
          loadTransactions={loadTransactions} // <-- Truyền loadTransactions
        />;
      case 'Add':
        return <AddScreen 
          onNavigate={handleNavigate} 
          addTransaction={addTransaction}
        />;
      case 'Stats':
        return <StatsSyncScreen 
          onNavigate={handleNavigate} 
          getUnsyncedTransactions={getUnsyncedTransactions}
          markAsSynced={markAsSynced}
          transactions={transactions}
        />;
        case 'Trash':
        return <TrashScreen
          onNavigate={handleNavigate}
          deletedTransactions={deletedTransactions}
          loadingDeleted={loadingDeleted}
          restoreTransaction={restoreTransaction}
          hardDeleteTransaction={hardDeleteTransaction}
          loadDeletedTransactions={loadDeletedTransactions}
        />;
      default:
        return <HomeScreen 
          onNavigate={handleNavigate}
          transactions={transactions} 
          loading={loading} 
          deleteTransaction={deleteTransaction}
          loadTransactions={loadTransactions} // <-- Truyền loadTransactions
        />;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>EXPENSE TRACKER</Text>
      </View>
      
      <View style={styles.content}>
        {renderScreen()}
      </View>

      <View style={styles.tabBar}>
        <TabButton 
          icon="📊" // Icon placeholder
          label="Tổng quan" 
          active={currentScreen === 'Home'} 
          onPress={() => handleNavigate('Home')} 
        />
        <TabButton 
          icon="➕" // Icon placeholder
          label="Thêm mới" 
          active={currentScreen === 'Add'} 
          onPress={() => handleNavigate('Add')} 
        />
        <TabButton 
          icon="☁️" // Icon placeholder
          label="Đồng bộ" 
          active={currentScreen === 'Stats'} 
          onPress={() => handleNavigate('Stats')} 
        />
        <TabButton 
          icon="🗑️" // Icon placeholder
          label="Thùng rác" 
          active={currentScreen === 'Trash'} 
          onPress={() => handleNavigate('Trash')} 
        />
      </View>
    </SafeAreaView>
  );
};