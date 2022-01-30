import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IlustrationSvg from '../assets/icon/ilustration.svg';

export default function ReactNativeSvg() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ilustration Mode</Text>
      <IlustrationSvg width={200} height={200} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    textAlign: 'center',
  },
});
