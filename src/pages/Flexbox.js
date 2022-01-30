import {Text, View} from 'react-native';
import React, {Component} from 'react';

export default class Flexbox extends Component {
  constructor(props) {
    super(props);
    console.log('---->Constructor');
  }
  render() {
    console.log('---->render');
    return (
      <View>
        <Text>Halo siapp</Text>
      </View>
    );
  }
}
