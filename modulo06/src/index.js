/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import './config/ReactotronConfig';

import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.nome}>Fernando Selvino de </Text>
      </View>
    );
  }
}
console.tron.log('Vamos debugar');
const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7159c1',
  },
  nome: {
    fontSize: 26,
    color: 'black',
    borderBottomLeftRadius: 50,
  },
});
