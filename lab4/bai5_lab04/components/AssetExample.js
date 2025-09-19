import { Text, View, StyleSheet, Image } from 'react-native';

const AssetExample = ({img}) => {
  return (
    <View style={styles.container}>
      <Image source={img} style={styles.logo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    height: 128,
  },
  paragraph: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});

export default AssetExample;
