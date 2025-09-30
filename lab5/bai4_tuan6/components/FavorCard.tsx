import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import Images from '../utils/Images'

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

interface ProductProps {
  product: Product
}

const FavorCard: React.FC<ProductProps> = ({product}) => {
  return (
    <View style={styles.container}>
      <Image source={Images[product.img]} style={styles.img}/>
      <View>
        <Text>{product.name}</Text>
        <Text>{product.price-product.sale}đ</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '90%',
  },

  img: {
    resizeMode: 'contain',
  }
})