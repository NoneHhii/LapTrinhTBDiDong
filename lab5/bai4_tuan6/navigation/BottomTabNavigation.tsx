import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import ProductsList from '../screens/ProductsList'
import FavoritesScreen from '../screens/FavoritesScreen'
import RootNavigation from './RootNavigation'
import {Ionicons, MaterialIcons} from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

const BottomTabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions = {({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';

          if(route.name === 'Home') iconName = 'home'
          else if(route.name === 'Products') iconName = 'explore'
          else if(route.name === 'Favorites') iconName = 'favorite'

          return <MaterialIcons name={iconName} size={24} color={focused ? 'blue' : 'black'}/>
          
        },
        tabBarActiveTintColor: 'blue'
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Products" component={RootNavigation}/>
      <Tab.Screen name="Favorites" component={FavoritesScreen}/>
    </Tab.Navigator>
  )
}

export default BottomTabNavigation;