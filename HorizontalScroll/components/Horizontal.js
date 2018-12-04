

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions
} from 'react-native';


export default class Horizontal extends Component {
  render() {
    return (
      <ScrollView horizontal={true} style={styles.container}>
          <View style={styles.outer}>
            <Text style={styles.innerText}>Hello</Text>            
          </View>
          <View style={styles.outer}>
            <Text style={styles.innerText}>My Name is </Text>            
          </View>
          <View style={styles.outer}>
            <Text style={styles.innerText}>Tushar Gupta</Text>            
          </View>
               
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {    
  },
  outer:{
    backgroundColor: '#007bb6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  innerText:{
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
  }
  
});
