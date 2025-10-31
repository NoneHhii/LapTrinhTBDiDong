import { SQLiteProvider } from 'expo-sqlite';
import { StatusBar } from 'expo-status-bar';
import { Suspense } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { migrateDbIfNeeded } from './database/migrateDbIfNeeded';
import { MainAppContent } from './screens/MainAppContent';

export default function App() {
  return (
    <SafeAreaProvider>
      <Suspense fallback={<View><ActivityIndicator size="large" color="#4F46E5" /></View>}>
        <SQLiteProvider 
          databaseName="expense_tracker.db" 
          onInit={migrateDbIfNeeded}
          useSuspense={true} // Sử dụng Suspense
        >
          <MainAppContent />
        </SQLiteProvider>
      </Suspense>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
