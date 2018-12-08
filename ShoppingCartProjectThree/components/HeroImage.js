import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, Dimensions } from 'react-native'
import HeroText from './HeroText';

export default class HeroImage extends Component {
  render() {
    return (
      
        <ImageBackground 
            source={require('../images/img1.png')}
            style={styles.img}>
            <HeroText />
        </ImageBackground>
            
     
    )
  }
}

const styles = StyleSheet.create({
    
    img:{
        width: Dimensions.get('window').width,
        height: 200,
        backgroundColor: '#ffff'
    }
})
