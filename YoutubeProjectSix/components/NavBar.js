import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'


export default class NavBar extends Component {
  render() {
    return (
      <View style={styles.container}>
      
        <View style={styles.navbar}>
            <Image 
            style={styles.logo}
            source={require('./img1.jpg')}/>

            <View style={styles.moveright}>
            <Icon name="search" size={27} style={styles.icons}/>
            <Icon name="account-circle" size={27} style={styles.icons}/>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
          
    },
    navbar:{
        marginTop: 35,
        height: 55,
        backgroundColor: '#fff',
        elevation: 3,
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    logo:{
        width:120,
        height: 23,
    },
    moveright:{
        flexDirection: 'row',
    },
    icons:{
        padding: 5,
        marginLeft: 15,
    }
})
