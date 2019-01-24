/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {FlatList, Platform, StyleSheet, Text, View} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { Card } from 'react-native-elements'


const data = [
  {
    imageUrl:"https://via.placeholder.com/160x160",
    title:"something"
  },
  {
    imageUrl:"https://via.placeholder.com/160x160",
    title:"something two"
  },
  {
    imageUrl:"https://via.placeholder.com/160x160",
    title:"something three"
  },
  {
    imageUrl:"https://via.placeholder.com/160x160",
    title:"something four"
  },
  {
    imageUrl:"https://via.placeholder.com/160x160",
    title:"something five"
  },
  {
    imageUrl:"https://via.placeholder.com/160x160",
    title:"something six"
  },
];

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor(props){
    super(props);
    this.state = {
      data: data
    };    
  }


  render() {
    return (
            <FlatList
              data={this.state.data}
              renderItem={({item: rowData}) =>{
                return(
                  <Card style={{height:200}}
                  title="null"
                  image={{url: rowData.imageUrl}}
                  containterStyle={{padding: 0, width: 160, height: 200, marginTop:150}}>

                  <Text style={{marginBottom:10}}>{rowData.title}</Text>

                  </Card>
                )
              }
            }
            keyExtractor={(item, index) => index}
            />
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
