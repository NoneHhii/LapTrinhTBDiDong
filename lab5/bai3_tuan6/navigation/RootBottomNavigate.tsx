import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Tab = createBottomTabNavigator();

const RootBottomNavigate: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions = {({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if(route.name === 'HomeScreen') iconName = focused ? 'home' : 'home-outline';
          else if(route.name === 'SearchScreen') iconName = focused ? 'search' : 'search-outline';
          else if(route.name === 'ProfileScreen') iconName = focused ? 'person' : 'person-outline';

          return <Ionicons name={iconName} color={color} size={size}/>
        }
      })}
    >
      <Tab.Screen name='HomeScreen' component={HomeScreen}/>
      <Tab.Screen name='SearchScreen' component={SearchScreen}/>
      <Tab.Screen name='ProfileScreen' component={ProfileScreen}/>
    </Tab.Navigator>
  ) 
}

export default RootBottomNavigate;