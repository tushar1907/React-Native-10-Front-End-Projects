import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet } from 'react-native';



export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
        placeholder="Username"
        style={styles.input}/>
        <TextInput 
        placeholder="Password"
        style={styles.input}/>
        <TouchableOpacity style={styles.buttonContainer}><Text style={styles.buttonText}>Login</Text></TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,       
      padding: 20  
    },  
    input:{
      height: 40,
      backgroundColor: 'rgba(255,255,255, 0.8)',
      paddingLeft: 20,
      marginBottom: 15,
    },
    buttonContainer:{
        backgroundColor: '#27ae60',   
        paddingVertical: 15,        
    },
    buttonText: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold', 
        
    }
  });
