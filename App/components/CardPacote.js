import React from 'react';
import {Text, View } from 'react-native';

export default class CardPacote extends React.Component {
  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.props.detalhes, undefined, 2)}</Text>
      </View>
    );
  }
}