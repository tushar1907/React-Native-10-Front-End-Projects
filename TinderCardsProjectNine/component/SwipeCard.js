import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

import { Container, Header, DeckSwiper, Card, CardItem, Thumbnail, Left, Body, Icon } from 'native-base';


const cards=[
    {
        text: 'Card One',
        name: 'One',
        image: require('./image/img1.jpg')
    },
    {
        text: 'Card Two',
        name: 'Two',
        image: require('./image/img3.jpg')
    },
    {
        text: 'Card Three',
        name: 'Three',
        image: require('./image/img4.jpg')
    }
]

export default class SwipeCard extends Component {
  render() {
    return (
      <DeckSwiper 
      dataSource={cards}
      renderItem={item =>
        <Card style={{ elevation: 3 }}>
          <CardItem>
            <Left>
              <Thumbnail source={item.image} />
              <Body>
                <Text>{item.text}</Text>
                <Text note>Tushar Clicked</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image style={{ height: 300, flex: 1 }} source={item.image} />
          </CardItem>
          <CardItem>
            <Icon name="heart" style={{ color: '#ED4A6A' }} />
            <Text>{item.name}</Text>
          </CardItem>
        </Card>
      }
      />
    )
  }
}

const styles = StyleSheet.create({})
