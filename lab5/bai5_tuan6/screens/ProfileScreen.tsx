import { View, Text, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import { useEffect, useState } from "react";
import AssetExample from '../components/AssetExample'

interface User {
  id: number,
  name: string,
  email: string,
}

const ProfileScreen: React.FC = () => {
  const [users, setUsers] = useState();
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
  }, [users, loading]);

  if(loading) {
    return (
      <View style={[styles.container, {alignItems: 'center'}]}>
        <ActivityIndicator size={'large'} color="#0000ff"/>
        <Text>Loading...</Text>
      </View>
    )
  }

  const renderUser = ({item}: {item: User}) => {
    return (
      <AssetExample user={item}/>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        List user
      </Text>
      <FlatList
        data={users}
        renderItem={renderUser}
        keyExtractor={user => user.id}
        horizontal
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfileScreen;