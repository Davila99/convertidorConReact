import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CounterScreen from './src/screens/CounterScreen'
//import { Convertidor } from './src/components/Convertidor';


export default function App() {
  return (
      <CounterScreen></CounterScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
