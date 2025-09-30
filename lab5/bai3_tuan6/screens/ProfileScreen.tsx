import {View, Text, TouchableOpacity, StyleSheet, Image, TextInput} from 'react-native'
import {Ionicons} from '@expo/vector-icons'

const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Profile</Text>
      <View style={styles.card}>
        <Ionicons name="person-circle" size={48}/>
        <View style={styles.txt}>
          <Text style={{fontWeight: 'bold'}}>Jiikayss</Text>
          <Text style={{color: '#333'}}>jiikayss@gmail.com</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: "80%",
    padding: 10,
    marginTop: 30,
    borderRadius: 15,
  },

  txt: {
    marginLeft: 10,
  }
})

export default ProfileScreen;