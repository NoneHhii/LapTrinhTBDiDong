import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const AssetExample = ({product}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={product.img} style={styles.img}/>
      <View>
        <Text>{product.name}</Text>
        <Text style={styles.textRed}>{product.shop}</Text>
      </View>
      <TouchableOpacity style={styles.btn}>Chat</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },

  img: {
    width: 74,
    height: 74,
  },

  btn: {
    backgroundColor: '#F31111',
    paddingHorizontal: 15,
    paddingVertical: 5,
    color: '#fff'
  },

  textRed: {
    color: '#F31111'
  }
});

export default AssetExample;
