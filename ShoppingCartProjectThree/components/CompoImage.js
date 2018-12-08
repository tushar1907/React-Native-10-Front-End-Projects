import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class CompoImage extends Component {
  render() {
    return (
        <Image 
        source={this.props.imagesrc}
        style={styles.img}/>
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
