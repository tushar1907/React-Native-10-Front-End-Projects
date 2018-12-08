import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions, ScrollView } from 'react-native'
import CompoImage from './CompoImage';

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.column1}>
        <CompoImage imagesrc={require('../images/img2.jpg')}/> 
        </View>

        <View style={styles.column2}>
        <CompoImage imagesrc={require('../images/img3.jpg')}/> 
        </View>

        <View style={styles.full}>
        <CompoImage imagesrc={require('../images/img4.jpg')}/> 
        </View>

        <View style={styles.column1}>
        <CompoImage imagesrc={require('../images/img2.jpg')}/> 
        </View>

        <View style={styles.full}>
        <CompoImage imagesrc={require('../images/img3.jpg')}/> 
        </View>

        <View style={styles.column2}>
        <CompoImage imagesrc={require('../images/img4.jpg')}/> 
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
        backgroundColor: '#3b5998',
    },
    column1:{
        flex:1,
        padding: 5
    },
    column2:{
        flex:3,
        padding: 5
    },
    full:{
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent:'center',
        padding: 5        
    }
})
