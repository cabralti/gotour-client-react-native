import React from 'react';
import { Text, View, Alert, ImageBackground, Button } from 'react-native';

export default class DetalhePacote extends React.Component {
  
  state = {
    dados : undefined
  }

  //recuperando id do pacote do servidor
  componentDidMount(){
    fetch('http://devup.com.br/gotour/api/pacote/88/detalhes')
    .then(T => T.json())
    .then(dados => this.setState({ dados }))
    .catch(() => Alert.alert('Erro', 'Não foi possível recuperar os detalhes do pacote'))
  }

  render() {
    
    const { dados } = this.state

    if(!dados){
        return (
          <View />
        )
    }

    return (
      <View style={{paddingTop: 30}}>
      <ImageBackground
      resizeMode='cover'
      style={{witdh:'100%', height: 200}}
      source={{uri: dados.urlImagem}}>

      <Text>{dados.pacote.nome.toUpperCase()}</Text>
      </ImageBackground>
        <View>
          <Text>Descrição: {dados.descricao}</Text>
          <Text>Telefone: {dados.telefone}</Text>
          <Text>URL: {dados.site}</Text>
          <Text>
            Preço: {dados.pacote.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'} )}
          </Text>
        </View>
        <Button title='Voltar' onPress={() => console.log('voltar')}></Button>
      </View>
    );
  }
}