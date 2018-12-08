import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class HeroImage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
            source={require('../images/img1.png')}
            style={styles.img}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    img:{
        width: 200,
        height: 200,
    }
})
