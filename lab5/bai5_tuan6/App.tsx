import * as React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useEffect, useState } from "react";
import AssetExample from './components/AssetExample'
import ProfileScreen from './screens/ProfileScreen'
import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerType: 'front',
          drawerStyle: { backgroundColor: '#fff', width: 240 },
          drawerActiveTintColor: 'tomato',
          drawerInactiveTintColor: 'gray',
          headerStyle: { backgroundColor: '#f5f5f5' },
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
