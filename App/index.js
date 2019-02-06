import React from 'react';
import ListaPacotes from './views/ListaPacotes';
import DetalhePacote from './views/DetalhePacote';

export default class App extends React.Component {
  render() {
    return (
      <DetalhePacote />
    );
  }
}