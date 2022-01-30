import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

export default function Input({label, ...rest}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.textinput} {...rest} />
    </View>
  );
}

const styles = StyleSheet.create({
  textinput: {
    borderWidth: 1,
    marginHorizontal: 10,
    borderColor: 'grey',
    borderRadius: 12,
    padding: 12,
  },
  label: {
    fontSize: 16,
    padding: 12,
    color: '#2d2d2d',
    marginBottom: 1,
  },
});
