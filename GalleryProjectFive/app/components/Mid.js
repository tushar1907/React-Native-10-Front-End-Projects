import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Mid extends Component {
  render() {
    return (
      <View style={styles.mid}>
        <View style={[styles.outerView,styles.leftBar]}>
            <Text style={styles.text1}>6+</Text>
            <Text style={styles.text2}>Images</Text>
        </View>
        <View style={styles.outerView}>
            <Text style={styles.text1}>100+</Text>
            <Text style={styles.text2}>Subscribers</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    mid:{
        flexDirection: 'row',
        backgroundColor: '#CF000F',
        borderTopWidth: 8,
        borderTopColor: '#fff',
    },
    outerView:{
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    text1:{
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    text2:{
        color: '#fff',
        fontSize: 14,
        marginTop: 5,
    },
    leftBar:{
        borderRightWidth: 4,
        borderRightColor: '#fff'
    }

})
