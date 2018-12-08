import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class HeroText extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headerText}>Headphones</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    
    headerText:{        
        elevation: 2,
        alignSelf: 'center',
        fontSize: 25,
        color: '#292929',
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0, 0.2)',
        marginTop: 30,
    }
})
