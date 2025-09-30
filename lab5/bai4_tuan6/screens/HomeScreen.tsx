import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'


const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>
        Chào mừng đến didongviet!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  txt: {
    fontWeight: 'bold',
    fontSize: 20,
  }
})

export default HomeScreen;