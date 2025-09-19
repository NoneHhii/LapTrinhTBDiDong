import { StyleSheet, Text, View, ActivityIndicator, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from "react";

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('horizontal');

  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/images/search?limit=3")
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
      <View style={[styles.container, {alignItems: 'center'}]}>
        <ActivityIndicator size={'large'} color="#0000ff"/>
        <Text>Loading...</Text>
      </View>
    )
  }

  const renderUser = ({item}) => {
    return (
      <AssetExample img={item.url}/>
    )
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.paragraph}>
        Gallery
      </Text>
      <View style={styles.btnRow}>
        <TouchableOpacity onPress={() => setView('list')}>ListView</TouchableOpacity>
        <TouchableOpacity onPress={() => setView('grid')}>GridView</TouchableOpacity>
      </View>
      <View style={{height: 370}}>
        <FlatList
          data={users}
          renderItem={renderUser}
          keyExtractor={user => user.id}
          numColumns={view === 'list' ? 1 : 2}
          scrollEnabled={false} 
          key={view}
        />
      </View>
      <Text style={styles.paragraph}>Horizontal view</Text>
      <FlatList
        data={users}
        renderItem={renderUser}
        keyExtractor={user => user.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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

  btnRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  }
});
