import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'

import { List, ListItem } from 'react-native-elements';
import { users } from './datasource/data';


export default class ChatList extends Component {
  render() {
    return (
      <View> 
          {/* <Text>{users[0].name.first}</Text>          */}
          <List>               
              {users.map((user) =>
                <TouchableOpacity>                    
                    <ListItem
                        key={user.login.username}
                        roundAvatar
                        avatar={{uri: user.picture.thumbnail}}
                        title={user.name.first}    
                        subtitle={user.email}                
                    />  
                </TouchableOpacity>
                )}
          </List>
      </View>
    )
  }
}

ChatList.defaultProps = { ...users }
