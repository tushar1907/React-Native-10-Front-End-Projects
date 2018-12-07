import React, { Component } from 'react'
import { Text, View, StyleSheet, Image  } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image 
            source={require('../images/cart.png')}
            style={styles.logo} 
        />
        <Text style={styles.title}>Headphones Sopping Cart</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      height: 80,
      marginTop: 20,
    },
    logo: {
      fontSize: 20,
      textAlign: 'center',
      marginTop: 10,
      width: 40,
      height: 40
    },
    title: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
      fontSize: 20
    },
  });
