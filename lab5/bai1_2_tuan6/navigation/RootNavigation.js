import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen'
import SelectColorScreen from '../screens/SelectColorScreen'

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="SelectScreen" component={SelectColorScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default RootNavigation;