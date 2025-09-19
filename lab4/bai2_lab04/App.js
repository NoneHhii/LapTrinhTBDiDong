import { StyleSheet, Text, View, Image, FlatList, TextInput } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

const data = [
  {id: 1, name: "Cáp chuyển từ Cổng USB sang PS2...", vote: 4, price: 69900, sale: 39, img: require('./giacchuyen 1.png')},
  {id: 2, name: "Cáp chuyển từ Cổng USB sang PS2...", vote: 4, price: 69900, sale: 39, img: require('./daynguon 1.png')},
  {id: 3, name: "Cáp chuyển từ Cổng USB sang PS2...", vote: 4, price: 69900, sale: 39, img: require('./dauchuyendoipsps2 1.png')},
  {id: 4, name: "Cáp chuyển từ Cổng USB sang PS2...", vote: 4, price: 69900, sale: 39, img: require('./dauchuyendoi 1.png')},
  {id: 5, name: "Cáp chuyển từ Cổng USB sang PS2...", vote: 4, price: 69900, sale: 39, img: require('./carbusbtops2 1.png')},
  {id: 6, name: "Cáp chuyển từ Cổng USB sang PS2...", vote: 4, price: 69900, sale: 39, img: require('./daucam 1.png')},

]

const renderProduct = ({item}) => {
  return (
    <AssetExample
      product={item}
    />
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./Back.png')}/>
        <View style={styles.input}>
          <Image source={require('./Search.png')} style={{marginRight: 10}}/>
          <TextInput placeholder="Dây cáp usb"/>
        </View>
        <Image source={require('./cart.png')}/>
        <Image source={require('./more.png')}/>
      </View>
      <FlatList
        data={data}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.header}>
        <Image source={require('./append.png')}/>
        <Image source={require('./Home.png')}/>
        <Image source={require('./backDevice.png')}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  header: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1BA9FF',
    padding: 10,
    justifyContent: 'space-between',
  },

  input: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 6,
  }
});
