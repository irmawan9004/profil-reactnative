import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import cart from '../assets/images/cart.png';

export default function Position() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.iconCart}></Image>
        <Text style={styles.notif}>10</Text>
      </View>
      <Text style={styles.text}>Silahkan isi Keranjang anda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {marginTop: 10, fontSize: 12, color: '#777777', fontWeight: '700'},
  wrapper: {padding: 20, alignItems: 'center'},
  cartWrapper: {
    borderWidth: 2,
    borderColor: '#4398D1',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  iconCart: {
    width: 50,
    height: 50,
  },
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6FCF92',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
