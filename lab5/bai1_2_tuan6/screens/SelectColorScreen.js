import {View, Text, TouchableOpacity, StyleSheet, Image, TextInput} from 'react-native'
import {useState} from 'react'
import images from '../utils/images';

const SelectColorScreen = ({navigation, route}) => {
  const [select, setSelect] = useState(0);
  const {data} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        
        <Image source={images[select===0?data[3].img:data[select-1].img]} style={styles.img}/>
        <View>
          <Text>{data[0].name}</Text>
          {select === 1 ? (
            <View>
              <Text>Màu: <Text style={styles.txtColor}>Trắng</Text></Text>
            </View>
          ): select === 2 ? (
            <View>
              <Text>Màu: <Text style={styles.txtColor}>Đỏ</Text></Text>
            </View>
          ): select === 3 ? (
            <View>
              <Text>Màu: <Text style={styles.txtColor}>Đen</Text></Text>
            </View>
          ): select === 4 ? (
            <View>
              <Text>Màu: <Text style={styles.txtColor}>Xanh</Text></Text>
            </View>
          ): (<View/>)}
          {select !== 0 && (
            <View>
              <Text>Cung cấp bởi <Text style={styles.txtColor}>Tiki Tradding</Text></Text>
              <Text style={styles.txtColor}>{data[3].price - data[3].sale}đ</Text>
            </View>
          )}
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#C4C4C4',
          width: '100%',
          padding: 10,
        }}
      >
        <Text>Chọn một màu bên dưới:</Text>

        <View style={{alignItems: 'center', marginVertical: 10}}>
          <TouchableOpacity 
            style={[
              styles.rec, {backgroundColor: '#fff'}, 
              select === 1 && {borderWidth: 2, borderColor: '#E0E41A'}
            ]}
            onPress={() => setSelect(1)}
          />
          <TouchableOpacity 
            style={[
              styles.rec, {backgroundColor: '#F30D0D'},
              select === 2 && {borderWidth: 2, borderColor: '#E0E41A'}
            ]}
            onPress={() => setSelect(2)}
          />
          <TouchableOpacity 
            style={[
              styles.rec, {backgroundColor: '#000'},
              select === 3 && {borderWidth: 2, borderColor: '#E0E41A'}
            ]}
            onPress={() => setSelect(3)}
          />
          <TouchableOpacity 
            style={[
              styles.rec, {backgroundColor: '#234896'},
              select === 4 && {borderWidth: 2, borderColor: '#E0E41A'}
            ]}
            onPress={() => setSelect(4)}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity 
            style={styles.btn}
            onPress={() => navigation.navigate('HomeScreen', {id: select})}
          >
            XONG
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  img: {
    width: 112,
    height: 142,
    marginTop: 10,
    marginHorizontal: 10,
  },

  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  rec: {
    width: 85,
    height: 85,
    marginVertical: 5,
  },

btn: {
    backgroundColor: '#1952E294',
    width: '80%',
    textAlign: 'center',
    color: '#fff',
    paddingVertical: 10,
    fontWeight: 'bold',
    borderRadius: 10,
  },

  txtColor: {
    fontWeight: 'bold',
  }
})

export default SelectColorScreen;