/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
} from 'react-native';
import MapView from 'react-native-maps';

const{width,heigth}=Dimensions.get('window')
const instructions = Platform.select({

});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
   super(props)
   this.state={
     servico:"",
   };
 }
  Buscar(){

  }
  render() {
    return (
    <View style={styles.container}>

      <MapView style={styles.map}
      initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      }}
      />

      <TextInput style={styles.Busca_servico}
      onChangeText={(servico) => this.setState({servico})}
      placeholder="Qual serviço ?"
      placeholderTextColor="black"
      />
    </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
      flex: 1,
      width:width,
  },
  Busca_servico:{
    top:-550,
    left:17,
    height:40,
    width:230,
    borderWidth:1,
},
});
