import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Image, Dimensions } from 'react-native'

export default class Body extends Component {
  render() {
    return (
        <ScrollView>
            <View style={styles.body}>
                <View style={styles.smallview}>
                    <Image style={styles.myimage}
                    source={require('../images/img3.jpg')}/>
                </View>
                <View style={styles.smallview}>
                    <Image style={styles.myimage}
                    source={require('../images/img4.jpg')}/>
                </View>
                <View style={styles.smallview}>
                    <Image style={styles.myimage}
                    source={require('../images/img5.jpg')}/>
                </View>
                <View style={styles.smallview}>
                    <Image style={styles.myimage}
                    source={require('../images/img1.jpg')}/>
                </View>
                <View style={styles.smallview}>
                    <Image style={styles.myimage}
                    source={require('../images/img3.jpg')}/>
                </View>
                <View style={styles.smallview}>
                    <Image style={styles.myimage}
                    source={require('../images/img4.jpg')}/>
                </View>
                <View style={styles.smallview}>
                    <Image style={styles.myimage}
                    source={require('../images/img5.jpg')}/>
                </View>
                <View style={styles.smallview}>
                    <Image style={styles.myimage}
                    source={require('../images/img1.jpg')}/>
                </View>
                <View style={styles.smallview}>
                    <Image style={styles.myimage}
                    source={require('../images/img3.jpg')}/>
                </View>
                <View style={styles.smallview}>
                    <Image style={styles.myimage}
                    source={require('../images/img4.jpg')}/>
                </View>
                <View style={styles.smallview}>
                    <Image style={styles.myimage}
                    source={require('../images/img5.jpg')}/>
                </View>
                <View style={styles.smallview}>
                    <Image style={styles.myimage}
                    source={require('../images/img1.jpg')}/>
                </View>
            </View>
        </ScrollView>
      
    )
  }
}

const styles = StyleSheet.create({
    body:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    smallview:{
        margin: 2,
        height: 100,
        width: (Dimensions.get('window').width / 2) - 4,        
    },
    myimage:{
        flex: 1,
        width: null,
        alignSelf: 'stretch',
    }
})
