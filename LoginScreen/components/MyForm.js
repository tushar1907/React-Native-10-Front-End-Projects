import React, { Component } from 'react';
import { View, Text } from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;
const User = t.struct({
    email: t.String,
    username: t.String,
    password: t.String,
    terms: t.Boolean
  });
export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Form type={User} />
      </View>
    );
  }
}
