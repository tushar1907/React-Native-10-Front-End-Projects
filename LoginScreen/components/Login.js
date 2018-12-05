
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import MyForm from './MyForm'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logocontainer}>
        <Image 
        style={styles.logo} 
        source={require('./images/bluetoothprinter.jpg')}/>
         <Text  style={styles.title}>A Simple Login App</Text>
        </View>
        <View style={styles.myform}>
          <MyForm />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#282830',
    width: Dimensions.get('window').width
  },
  logocontainer:{
    flexGrow: 2,         
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    height:100,
    width: 100,
  },
  title:{
    color: '#fff'
  },
  myform:{
      flex: 3
  }
  
});
