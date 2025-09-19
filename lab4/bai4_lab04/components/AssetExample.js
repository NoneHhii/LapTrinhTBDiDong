import { Text, View, StyleSheet, Image } from 'react-native';

const AssetExample = ({user}) => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'left'}}>
        <Text style={styles.paragraph}>Name: </Text> 
        {user.name}
      </Text>
      <Text style={{textAlign: 'left'}}>
        <Text style={styles.paragraph}>Emal: </Text> 
        {user.email}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 54,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    height: 30,
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
