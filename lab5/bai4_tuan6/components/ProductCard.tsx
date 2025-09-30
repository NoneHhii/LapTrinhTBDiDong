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

interface ProductProp {
  product: Product,
  handleDetail: () => void,
}

const ProductCard: React.FC<ProductProp> = ({product, handleDetail}) => {
  return (
    <TouchableOpacity 
      style={styles.card}
      onPress={handleDetail}
    >
      <Image source={Images[product.img]} resizeMode="contain" style={styles.img}/>
      <View>
        <Text style={styles.txt}>{product.name}</Text>
        <View style={styles.row}>
          <Image source={require('../assets/star.png')} style={styles.star}/>
          <Image source={require('../assets/star.png')} style={styles.star}/>
          <Image source={require('../assets/star.png')} style={styles.star}/>
          <Image source={require('../assets/star.png')} style={styles.star}/>
          <Image source={require('../assets/star.png')} style={styles.star}/>
          <Text style={{marginLeft: 10, fontSize: 12,}}>{`(${product.rate})`}</Text>
        </View>
        {product.sale > 0 && (
          <Text style={styles.lineText}>{product.price}đ</Text>
        )}
        <Text style={{
          fontWeight: 'bold',
          color: '#CA1536',
        }}>
          {product.price - product.sale}đ
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 8,
    margin: 10,
    width: "40%",
    borderRadius: 10,
  },

  img: {
    width: "100%",
    height: 100,
  },

  txt: {
    marginTop: 10,
    marginBottom: 5,
    fontWeight: 'bold',
  },

  star: {
    width: 16,
    height: 16,
  },

  lineText: {
    textDecorationLine: 'line-through',
    color: '#ccc',
    fontSize: 12,
    marginVertical: 5,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})

export default ProductCard;

