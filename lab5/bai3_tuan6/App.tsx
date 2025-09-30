import { StyleSheet, Text, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native'

// or any files within the Snack
import RootBottomNavigate from './navigation/RootBottomNavigate'


export default function App() {
  return (
    <NavigationContainer>
      <RootBottomNavigate/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
