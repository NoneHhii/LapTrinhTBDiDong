import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const AssetExample = ({product}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={product.img} style={styles.img}/>
      <View>
        <Text>{product.name}</Text>
        <Text style={styles.textRed}>{product.shop}</Text>
      </View>
      <Image source={require('../vote.png')} style={styles.vote}/>
      <View style={styles.row}>
        <Text style={{fontWeight: 'bold'}}>{product.price} đ</Text>
        <Text style={{color: '#969DAA'}}>-{product.sale}%</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    // flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: 160,
  },
  row: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  logo: {
    height: 128,
    width: 128,
  },

  img: {
    width: 155,
    height: 90,
  },

  textRed: {
    color: '#F31111'
  },

  vote: {
    width: 106,
    height: 13,
  }
});

export default AssetExample;
