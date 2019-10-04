import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import './config/ReactotromConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
});

console.tron.log('há');

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Hello World</Text>
      </View>
    </>
  );
}
