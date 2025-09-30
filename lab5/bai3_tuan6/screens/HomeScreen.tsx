import {View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ActivityIndicator, FlatList} from 'react-native'
import {useState, useEffect} from 'react'
import UserComponent from '../components/UserComponent'

interface User {
  id: number,
  name: string,
  email: string,
}

const HomeScreen: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://68cd201ada4697a7f304d4d5.mockapi.io/user/users")
    .then(res => res.json())
    .then(data => {
      setUsers(data);
      setLoading(false);
    })
    .catch(err => {
      console.log(err);
      setLoading(false);
    })
  }, []);

  if(loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'#0000ff'}/>
        <Text>Loading...</Text>
      </View>
    )
  }

  const renderUser = ({item} : {item: User}) => {
    return (
      <UserComponent user={item}/>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>List user</Text>
      <FlatList
        data={users}
        renderItem={renderUser}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false as any}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },

  text: {
    fontWeight: 'bold',
    fontSize: 24,
  }
})

export default HomeScreen;