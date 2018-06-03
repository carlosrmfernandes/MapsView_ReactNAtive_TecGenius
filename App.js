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
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import MapView from 'react-native-maps';

const{width,heigth}=Dimensions.get('window');
const instructions = Platform.select({

});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
   super(props)
   this.state={
     id:null,
     servico:"",
     obs:"Solicitação envia, aguarde o contacto",

     locais:[{
       id:0,
       title:'Mecanico',
       descriptiom:'Eng Mecanico',
       celular:"+48996684418",
       latitude: -27.2106710,
       longitude: -49.6362700,
     },
     {
       id:1,
       title:'Mecanico',
       descriptiom:'Mecanico Industrial',
        celular:"+48996684418",
       latitude: -27.2006710,
       longitude: -49.6362700,
     },

     {
       id:2,
       title:'Mecanico Profissional',
       descriptiom:'Mecanico Industrial Industrial',
       celular:"+48996684418",
       latitude: -27.2006710,
       longitude: -49.6262700,
     }

    ],
   };
 }
  Buscar(){

  }
  EnviarPedido(){
  ids=JSON.parse(this.state.id);
  const {latitude,longitude,title,descriptiom,celular }=this.state.locais[ids];
  alert("Titulo : "+title+"\nDescrição : "+descriptiom+"\nCelular : "+celular+"\n"+this.state.obs);

  }
  render() {
    const {latitude,longitude }=this.state.locais[1];
    return (
    <View style={styles.container}>

      <MapView style={styles.map}
      initialRegion={{
      latitude,
      longitude,
      latitudeDelta: 0.0142,
      longitudeDelta: 0.0231,
      }}
      showsPointsOfInterest={false}
      showBuildings={false} >

        {this.state.locais.map(locais=>(
          <MapView.Marker

          key={locais.id}
            coordinate={{
            latitude: locais.latitude,
            longitude:locais.longitude,

          }}
          />
        ))}

      </MapView>

      <ScrollView style={styles.scroll} horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled

      >


      {this.state.locais.map(locais=>(
        <View key={locais.id } style={styles.place}>
        <Text>{locais.title}</Text>
        <Text>{locais.descriptiom}</Text>
        <Text>{locais.celular}</Text>
        <Text>Trabalhos feitos : 45</Text>
        <TouchableHighlight style={styles.enviarpedido} onPress={this.EnviarPedido.bind(this)}>
       <Text style={styles.enviarpedidotext}>Solicitar</Text>
       </TouchableHighlight>
       <TextInput onChangeText={(id) => this.setState({id})}
        value={JSON.stringify(locais.id) }
       />
        </View>

      ))}

      </ScrollView>

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
    position:'absolute',
    top:0,
    left:0,
    bottom:0,
    right:0,
  },
  Busca_servico:{
    top:-350,
    left:17,
    height:40,
    width:230,
    borderWidth:1,
},
  scroll:{
    maxHeight:200,
    width:'100%',
    top:220,
  },
  place:{
    maxHeight:180,
    width:width -40,
    backgroundColor: '#FFF',
    marginHorizontal : 20,

  },
  enviarpedido:{
    top:60,
    left:220,
    height:35,
    width:90,
    borderWidth:1,
},
enviarpedidotext:{
  backgroundColor: '#DDDDDD',
  padding:10,

},
});
