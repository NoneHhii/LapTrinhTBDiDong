import {View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ActivityIndicator} from 'react-native'
import {useEffect, useState} from 'react'
import images from '../utils/images';

const HomeScreen = ({navigation, route}) => {

  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState(3);

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
    if(route.params?.id) setId(route.params.id - 1);
  }, [products, loading, route.params?.id]);

  if(loading) {
    return (
      <View style={[styles.container, {alignItems: 'center'}]}>
        <ActivityIndicator size={'large'} color="#0000ff"/>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {products.length > 0 ? (
        <View>
          <Image 
            source={images[products[id].img]}
            style={styles.img}
          />
          <Text style={{marginVertical: 10}}>{products[id].name}</Text>
          <View style={styles.row}>
            <Image source={require('../assets/star.png')}/>
            <Image source={require('../assets/star.png')}/>
            <Image source={require('../assets/star.png')}/>
            <Image source={require('../assets/star.png')}/>
            <Image source={require('../assets/star.png')}/>
            <Text style={{marginLeft: 20}}>{`(Xem ${products[id].rate} đánh giá)`}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.text}>{products[id].price - products[id].sale}đ</Text>
            <Text 
              style={{
                color: '#00000094',
                marginLeft: 30,
                textDecorationLine: 'line-through',
              }}
            >
              {products[id].price}đ
            </Text>
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

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity 
              style={[
                styles.row, 
                styles.btnNavi, 
                {
                  width: '90%',
                  justifyContent: 'space-between'
                }
              ]}
              onPress={() => navigation.navigate("SelectScreen", {data: products})}
            >
              <Text>4 MÀU-CHỌN MÀU</Text>
              <Image source={require('../assets/forward.png')}/>
            </TouchableOpacity>
          </View>

          <View style={{alignItems: 'center', marginTop: 10}}>
            <TouchableOpacity style={styles.btn}>CHỌN MUA</TouchableOpacity>
          </View>
        </View>
      ): (
        <Text>{'Page not found'}</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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

  btnNavi: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
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

export default HomeScreen;