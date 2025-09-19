import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import React, { useEffect, useState } from "react";

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
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

  const renderUser = ({item}) => {
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
