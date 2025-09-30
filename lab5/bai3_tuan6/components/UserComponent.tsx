import {View, Text, TouchableOpacity, StyleSheet, Image, TextInput} from 'react-native'

interface User {
  id: number,
  name: string,
  email: string,
}

interface UserProps {
  user: User;
}

const UserComponent:React.FC<UserProps> = ({user}) => {
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
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 54,
    backgroundColor: '#fff',
    marginVertical: 10,
    height: 30,
  },
  paragraph: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default UserComponent;