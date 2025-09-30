import {View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ActivityIndicator} from 'react-native'

const SearchScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search Name User</Text>
      <View style={styles.input}>
        <TextInput placeholder="Enter user" style={{outlineStyle: 'none'}}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },

  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: '#333',
    padding: 8,
    marginTop: 20,
    borderRadius: 8,
    backgroundColor: '#fff',
    
  },

  text: {
    fontWeight: 'bold',
    fontSize: 24,
  },
})

export default SearchScreen;