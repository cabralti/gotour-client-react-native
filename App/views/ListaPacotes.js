import React from 'react';
import {Text, View } from 'react-native';
import CardPacote from '../components/CardPacote';

export default class ListaPacotes extends React.Component {
  state = {
    pacotes: undefined
  }

  render() {
    return (
      <View>
        <Text>Hello World!</Text>
      </View>
    );
  }
}