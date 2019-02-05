import React from 'react';
import {Text, View, TouchableWithoutFeedback } from 'react-native';

export default class CardPacote extends React.Component {
  render() {

    const {onPress} = this.props;

    // criando constante com os valores mapeados da 'detalhes'
    const {id, nome, valor, dataInicio, dataFim} = this.props.detalhes;

    return (
      
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={{ borderWidth: 2, borderColor: 'red'}}>
            <Text>{id}</Text>
            <Text>{nome}</Text>
            <Text>{valor}</Text>
            <Text>{dataInicio}</Text>
            <Text>{dataFim}</Text>
        </View>
      </TouchableWithoutFeedback>
      
    );
  }
}