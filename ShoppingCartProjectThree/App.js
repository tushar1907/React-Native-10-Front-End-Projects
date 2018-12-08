
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from './components/Header';
import HeroImage from './components/HeroImage';
import Body from './components/Body';



export default class App extends Component{
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header />
        <HeroImage />
        <Body />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#fff',
  }
  
});
