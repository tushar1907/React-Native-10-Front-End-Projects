
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logocontainer}></View>
        <Image 
        style={styles.logo} 
        source={require('./images/bluetoothprinter.jpg')}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  logocontainer:{
    flexGrow: 2,         
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    height:100,
    width: 100,
  }
  
});
