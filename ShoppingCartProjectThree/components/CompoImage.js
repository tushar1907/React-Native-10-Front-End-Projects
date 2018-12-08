import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground } from 'react-native'
import HeroText from './HeroText';

export default class CompoImage extends Component {
  render() {
    return (
        <ImageBackground 
        source={this.props.imagesrc}
        style={styles.img}>
        <HeroText />
        </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
    img:{
        flex:1,
        height: 200,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
