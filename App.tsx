import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Convertidor } from './src/components/Convertidor';

export default function App() {
  return (
    <View style={styles.container}>
    <Text style={{ fontWeight:'bold', fontSize:19}}>Convertidor de Unidades</Text>
      <Convertidor/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#79DDDB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
