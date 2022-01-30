import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';

export default function Profile() {
  const Layout = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  };
  const Color = {
    theme: '#1BB0CE',
    white: '#fff',
    black: '#2d2d2d',
  };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: Color.theme,
          paddingBottom: Layout.height * 0.2,
          borderBottomEndRadius: Layout.width * 0.1,
          borderBottomLeftRadius: Layout.width * 0.1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          <Image
            source={require('../assets/images/iwan.jpeg')}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
            }}></Image>
          <View style={{marginLeft: 10}}>
            <Text style={{fontSize: 20, color: 'black'}}>M.Irmawan</Text>
            <Text style={{color: Color.black}}>Mahasiswa</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
