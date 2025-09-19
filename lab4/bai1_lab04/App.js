import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

const data = [
  {id: 1, name: "Ca nau lau mi mini", shop: "Shop Devang", img: require('./ca_nau_lau.png')},
  {id: 2, name: "1 KG kho ga bo toi", shop: "LTD Food", img: require('./ga_bo_toi.png')},
  {id: 3, name: "Xe can cau da nang", shop: "The gio do choi", img: require('./xa_can_cau.png')},
  {id: 4, name: "Do choi dang mo hinh", shop: "The gio do choi", img: require('./do_choi_dang_mo_hinh.png')},
  {id: 5, name: "Lanh dao gian don", shop: "Minh Long book", img: require('./lanh_dao_gian_don.png')},
  {id: 6, name: "Hieu long con tre", shop: "Minh Long book", img: require('./hieu_long_con_tre.png')},
  {id: 7, name: "Donal Trump thien tai lanh dao", shop: "Minh Long book", img: require('./trump 1.png')},

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
        <Text style={styles.title}>Chat</Text>
        <Image source={require('./cart.png')}/>
      </View>
      <Text style={styles.paragraph}>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>
      <FlatList
        data={data}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
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
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 16,
    textAlign: 'text-start',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1BA9FF',
    padding: 10,
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 16,
    color: '#fff',
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  }
});
