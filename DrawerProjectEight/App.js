/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, ScrollView, FlatList} from 'react-native';
import CardImage from './components/CardImage';
import FooterBadge from './components/FooterBadge';
import Sidebar from './components/Sidebar';
import { Drawer} from 'native-base';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  closeDrawer = () => {
    this.drawer._root.close()
  }
  openDrawer = () => {
    this.drawer._root.open()
  }


  render() {    
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<Sidebar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >   
          <Container>
            <Header>
              <Left>
                <Button transparent onPress={()=> this.openDrawer()}>
                  <Icon name='menu' />
                </Button>
              </Left>
              <Body>
                <Title>Side Bar Drawer</Title>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name='camera' />
                </Button>
              </Right>
            </Header>
            <FlatList data={[{key:'a'},{key:'b'},{key:'c'},{key:'d'}]}
            renderItem={({item}) => <CardImage/>} />            
          </Container>
                  
          <FooterBadge />
          
      </Drawer>
     
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: '#F5FCFF',
  }
});
