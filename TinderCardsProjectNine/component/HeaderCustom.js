import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { COntainer, Header, Left, Right, Body, Button, Icon, Title } from 'native-base';

export default class HeaderCustom extends Component {
  render() {
    return (
      <Header style={styles.container}>
        <Left>
            <Button transparent>
            <Icon name='menu'/>
            </Button>
        </Left>
        <Body>
      <Title> My Tinder Cards</Title>
        </Body>
        <Right>
            <Button transparent>
            <Icon name='menu'/>
            </Button>
        </Right>
      </Header>
    )
  }
}

const styles = StyleSheet.create({})
