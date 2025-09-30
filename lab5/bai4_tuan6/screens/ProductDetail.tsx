import {View, Text, TouchableOpacity, StyleSheet, Image, ScrollView} from 'react-native'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../navigation/RootNavigation'
import Images from '../utils/Images'
import {useFavor} from '../hooks/FavorContext'

type StackProp = NativeStackScreenProps<RootStackParamList, 'ProductDetail'>;

const ProductDetail: React.FC<StackProp> = ({navigation, route}) => {
  const {product} = route.params;
  const {addToFavor} = useFavor();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image 
          source={Images[product.img]}
          style={styles.img}
        />
        <Text style={{marginVertical: 10}}>{product.name}</Text>
        <View style={styles.row}>
          <Image source={require('../assets/star.png')}/>
          <Image source={require('../assets/star.png')}/>
          <Image source={require('../assets/star.png')}/>
          <Image source={require('../assets/star.png')}/>
          <Image source={require('../assets/star.png')}/>
          <Text style={{marginLeft: 20}}>{`(Xem ${product.rate} đánh giá)`}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{product.price - product.sale}đ</Text>
          {product.sale > 0 && (
            <Text 
              style={{
                color: '#00000094',
                marginLeft: 30,
                textDecorationLine: 'line-through',
              }}
            >
              {product.price}đ
            </Text>
          )}
          
        </View>
        <View style={styles.row}>
          <Text style={{
            fontSize: 12,
            color: '#FA0000',
            fontWeight: 'bold',
          }}>
            Ở ĐÂU RẺ HƠN HOÀN TIỀN
          </Text>
          <Image source={require('../assets/hint.png')} style={{width: 20, height: 20, marginLeft: 10}}/>
        </View>

        <View style={{alignItems: 'center', marginTop: 10}}>
          <TouchableOpacity 
            style={styles.btn}
            onPress={() => addToFavor(product)}
          >
            Thêm vào danh sách yêu thích
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  img: {
    width: 301,
    height: 371,
    marginTop: 30,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    justifyContent: "flex-start",
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  btn: {
    backgroundColor: '#EE0A0A',
    width: '80%',
    textAlign: 'center',
    color: '#fff',
    paddingVertical: 10,
    fontWeight: 'bold',
    borderRadius: 10,
  }
})

export default ProductDetail;