import React from 'react';
import {View, Alert } from 'react-native';
import CardPacote from '../components/CardPacote';

export default class ListaPacotes extends React.Component {
  state = {
    pacotes: undefined
  }
  
  componentDidMount(){
    fetch('http://devup.com.br/gotour/api/pacotes')
    .then(T => {

      if(T.status === 405){
        throw new Error(T.statusText);
      }

      return T.json()
    })
    .then(pacotes => this.setState({pacotes}))
    .catch(error => {
        if(error.message === '405'){
          Alert.alert('Erro', 'Erro interno da api')
        }else{
          Alert.alert('Erro', 'Não foi possível recuperar os pacotes')
        }
    })
  }

  render() {

    const { pacotes } =   this.state;

    if(!pacotes){
        return (
          <View />
        );
    }

    return (
      <View>
        {pacotes.map((pacote, key) => (
            <CardPacote detalhes={pacote} key={key} onPress={() => console.log('funcionou')}/>
        ))}
      </View>
    );
  }
}