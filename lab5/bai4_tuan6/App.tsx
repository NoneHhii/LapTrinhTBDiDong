import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native'
import {SafeAreaProvider} from 'react-native-safe-area-context'

// or any files within the Snack
import BottomTabNavigation from './navigation/BottomTabNavigation'
import {FavorProvider} from './hooks/FavorContext'
import AssetExample from './components/AssetExample';


export default function App() {
  return (
    <FavorProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <BottomTabNavigation/>
        </NavigationContainer>
      </SafeAreaProvider>
    </FavorProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
