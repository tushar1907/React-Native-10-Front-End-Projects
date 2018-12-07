import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Dimensions  } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image 
            source={require('../images/cart1.png')}
            style={styles.logo} 
        />
        <Text style={styles.title}>Headphones Sopping Cart</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    header: {
      
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',      
      marginTop: 20,
      height: 80,
      padding: 20,
      flexDirection: 'row',
      borderBottomWidth: 4,
      borderBottomColor: '#ccc',
      width: Dimensions.get('window').width
    },
    logo: {
      fontSize: 20,
      marginTop: 0,
      marginLeft: -2,
      width:50,
      height:50,
    },
    title: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 0,  
      fontSize: 17,
      color: '#000',
      marginLeft: 10,
      fontStyle: 'italic',
    },
  });
