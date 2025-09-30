import {createNativeStackNavigator} from '@react-navigation/native-stack'

import ProductsList from '../screens/ProductsList'
import ProductDetail from '../screens/ProductDetail'

interface Product {
  name: string,
  manu: string,
  price: number,
  sale: number,
  rate: number,
  img: string,
  color: string,
  id: number,
}

export type RootStackParamList = {
  Products: undefined,
  ProductDetail: {product: Product, handleAddFavor: () => void} | undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Products" component={ProductsList} options={{headerShown: false}}/>
      <Stack.Screen name="ProductDetail" component={ProductDetail}/>
    </Stack.Navigator>
  )
}

export default RootNavigation;