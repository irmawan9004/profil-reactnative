import {View, Text} from 'react-native';
import React from 'react';

export default function Loading() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 24}}>Loading...</Text>
    </View>
  );
}
