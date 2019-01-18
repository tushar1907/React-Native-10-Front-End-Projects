/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import NavBar from './components/NavBar'
import Tabbar from './components/Tabbar';
import Body from './components/Body';

import data from './components/search.json';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>        
        <NavBar />
        <ScrollView> 
        <Body video= {data.items[0]}/>
        <Body video= {data.items[1]}/>
        <Body video= {data.items[2]}/>
        <Body video= {data.items[3]}/>
        <Body video= {data.items[4]}/>        
        </ScrollView>
        <Tabbar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {    
    flex: 1,
    backgroundColor: '#fff',
  },
  
});
