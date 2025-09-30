import {View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, FlatList} from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {useState, useEffect} from 'react'
import ProductCard from '../components/ProductCard'
import {RootStackParamList} from '../navigation/RootNavigation'

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

type StackProp = NativeStackScreenProps<RootStackParamList, 'Products'>;

const ProductsList: React.FC<StackProp> = ({navigation}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const handleDetail = (e: Product) => {
    const product = products.find(p => p.id === e.id);
    navigation.navigate('ProductDetail', {product});
  }
  
  useEffect(() => {
    fetch("https://68cd201ada4697a7f304d4d5.mockapi.io/user/products")
    .then(res => res.json())
    .then(data => {
      setProducts(data);
      setLoading(false);
    })
    .catch(err => {
      console.log(err);
      setLoading(false);
    })
  }, []);

  if(loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size={'large'} color="#0000ff"/>
        <Text>Loading...</Text>
      </View>
    )
  }

  const renderProduct = ({item} : {item: Product}) => {
    return (
      <ProductCard product={item} handleDetail={() => handleDetail(item)}/>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 18, marginTop: 15}}>Danh sách sản phẩm</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        numColumns={2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
})

export default ProductsList