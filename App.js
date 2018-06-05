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
  Image,
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
       nome : "Carlos Rafael",
       idade : 25,
       title:'Mecanico',
       descriptiom:'Eng Mecanico',
       celular:"+48996684418",
       solicitao:45,
       latitude: -27.2106710,
       longitude: -49.6362700,
       img:"https://scontent.ffln5-1.fna.fbcdn.net/v/t1.0-9/22221515_1495423700552419_4738481256219337619_n.jpg?_nc_cat=0&oh=38e70c9b765c02c7529bd130aff800a5&oe=5B865042",
     },
     {
       id:1,
       nome : "Aristoteles lopes",
       idade : 24,
       title:'Mecanico',
       descriptiom:'Mecanico Industrial',
       celular:"+48996684418",
       solicitao:20,
       latitude: -27.2006710,
       longitude: -49.6362700,
       img:"https://scontent.ffln5-1.fna.fbcdn.net/v/t1.0-9/28871129_1986193691408536_6755138292894836231_n.jpg?_nc_cat=0&oh=21ea72ddc752f8402e5ed13ef773c786&oe=5B81E8D2",

     },

     {
       id:2,
       nome : "Ana Cleusia",
       idade : 26,
       title:'Mecanico Profissional',
       descriptiom:'Mecanico Industrial Industrial',
       celular:"+48996684418",
        solicitao:9,
       latitude: -27.2006710,
       longitude: -49.6262700,
       img:"https://scontent.ffln5-1.fna.fbcdn.net/v/t1.0-9/33704747_1960086420730446_6827950831778660352_n.jpg?_nc_cat=0&oh=75427dddc0353531654c6a2642800b5f&oe=5BBF1B95",

     }

    ],
   };
 }
  Buscar(){

  }
  EnviarPedido(){
  ids=1;
  const {latitude,longitude,title,descriptiom,celular }=this.state.locais[ids];
  alert("Titulo : "+title+"\nDescrição : "+descriptiom+"\nCelular : "+celular+"\n"+this.state.obs);

  }
  _mapReady = () =>{
    this.state.locais[0].mark.showCallout();
  };
  render() {
    const {latitude,longitude }=this.state.locais[0];
    return (
    <View style={styles.container}>

      <MapView style={styles.map}
      initialRegion={{
      latitude,
      longitude,
      latitudeDelta: 0.0142,
      longitudeDelta: 0.0231,
      }}

      onMapReady={this._mapReady}
      ref={ref => { this.map = ref; }}


      showsPointsOfInterest={false}
      showBuildings={false} >

        {this.state.locais.map(locais=>(
          <MapView.Marker
          ref={mark => locais.mark = mark }
          title={locais.nome}
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

        onMomentumScrollEnd={e =>{
        const scrolled = e.nativeEvent.contentOffset.x;
        const plase =(scrolled > 0)
        ? scrolled /Dimensions.get('window').width
        :0;
        const {latitude, longitude,mark }=this.state.locais[plase];

        this.map.animateToCoordinate({
          latitude,
          longitude,
        },1000);
        setTimeout(()=>{
          mark.showCallout();
        },1000)
      }}
      >


      {this.state.locais.map(locais=>(
        <View key={locais.id } style={styles.place}>
        <Text>Nome: {locais.nome}</Text>
        <Text>Idade : {locais.idade}</Text>
        <Text>Titulo : {locais.title}</Text>
        <Text>Descrição : {locais.descriptiom}</Text>
        <Text>Celular : {locais.celular}</Text>
        <Text>Solicitão : {locais.solicitao}</Text>
        <TouchableHighlight style={styles.enviarpedido} onPress={this.EnviarPedido.bind(this)}>
       <Text style={styles.enviarpedidotext}>Solicitar</Text>
       </TouchableHighlight>

       <Image style={styles.imgperfil} source={{uri:locais.img}}
       />
        </View>

      ))}

      </ScrollView>

      <TextInput style={styles.Busca_servico}
      onChangeText={(servico) => this.setState({servico})}
      placeholder="   Qual serviço ?"
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
    top:-370,
    left:10,
    height:40,
    width:230,
    borderWidth:1,
    backgroundColor: '#F5FCFF',
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
    top:30,
    left:220,
    height:35,
    width:90,
    borderWidth:1,
},
enviarpedidotext:{
  backgroundColor: '#DDDDDD',
  padding:10,
  textAlign:'center'

},
imgperfil: {
    borderRadius:50,
    borderWidth:1,
    height:100,
    width:100,
    top: -123,
    left:213,
},
});
