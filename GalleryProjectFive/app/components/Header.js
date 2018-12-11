import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, Image } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <ImageBackground 
      style={styles.headerbg}
      source={require('../images/img1.jpg')}>      
      <View style={styles.headercontainer}>
        <View style={styles.profilepiccontainer}>
            <Image style={styles.mypic}
            source={require('../images/img5.jpg')} />


        </View>
        <Text></Text>
      </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
    headerbg:{
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    },
    headercontainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    profilepiccontainer:{
        width: 180,
        height: 180,
        
    },
    mypic:{
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 90,   
        borderWidth: 3,
        borderColor: '#fff',
    }

})
