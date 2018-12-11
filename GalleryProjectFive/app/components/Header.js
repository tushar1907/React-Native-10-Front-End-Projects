import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground } from 'react-native'

export default class Header extends Component {
  render() {
    return (
      <ImageBackground 
      style={styles.headerbg}
      source={require('../images/img1.jpeg')}>      
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
    headerbg:{
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    }
})
