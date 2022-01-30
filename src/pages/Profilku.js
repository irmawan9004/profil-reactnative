import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {AuthContext} from './context';
import React from 'react';
import Gap from '../component/Gap';
import {icReact, icBootstrap, icExpress, icHtmlCss, icNode} from '../assets';

export default function Profilku() {
  const {signOut} = React.useContext(AuthContext);
  const Color = {
    theme: '#1BB0CE',
    white: '#fff',
    black: '#2d2d2d',
  };

  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: Color.theme}}>
        <View
          style={{
            backgroundColor: '#fff',
            height: 190,
            borderBottomLeftRadius: 50,
            borderBottomRightRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              marginLeft: 250,
              backgroundColor: '#fff',
              paddingTop: 10,
              paddingLeft: 10,
            }}
            onPress={() => signOut()}>
            <Text
              style={{
                backgroundColor: Color.theme,
                padding: 5,
                color: Color.white,
                borderRadius: 5,
                textAlign: 'center',
              }}>
              Logout
            </Text>
          </TouchableOpacity>
          <Image
            source={require('../assets/images/iwan.jpeg')}
            style={{
              width: 60,
              height: 60,
              borderRadius: 40,
            }}></Image>
          <Text style={{fontSize: 30, fontWeight: '700', color: Color.black}}>
            M.Irmawan
          </Text>
          <Text>Developer</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
          <View
            style={{
              height: 130,
              width: 300,
              backgroundColor: 'white',
              borderRadius: 20,
              elevation: 8,
              padding: 20,
              justifyContent: 'center',
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text style={{color: Color.black, fontWeight: '500'}}>
                Tentang :
              </Text>
              <Text
                style={{
                  backgroundColor: Color.theme,
                  borderRadius: 15,
                  width: 15,
                  height: 15,
                }}>
                {' '}
              </Text>
            </View>

            <Gap height={10} />
            <Text style={{textAlign: 'left', fontWeight: '400'}}>
              Halo namaku M.Irmawan kalian bisa memanggilku Iwan,Saya sangat
              menyukai dunia teknologi termasuk Programming dan Nerworking{' '}
            </Text>
          </View>
          <Gap height={20} />
          <View
            style={{
              height: 130,
              width: 300,
              backgroundColor: 'white',
              borderRadius: 20,
              elevation: 8,
              padding: 20,
              justifyContent: 'center',
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Text style={{color: Color.black, fontWeight: '500'}}>
                Biodata :
              </Text>
              <Text
                style={{
                  backgroundColor: Color.theme,
                  borderRadius: 15,
                  width: 15,
                  height: 15,
                }}>
                {' '}
              </Text>
            </View>

            <Gap height={10} />
            <Text style={{textAlign: 'left', fontWeight: '400'}}>
              Nama : M.Irmawan
            </Text>
            <Text style={{textAlign: 'left', fontWeight: '400'}}>
              Asal Kota : Kota Pekalongan
            </Text>
            <Text style={{textAlign: 'left', fontWeight: '400'}}>
              Email : irmawan9004@gmail.com
            </Text>
            <Text style={{textAlign: 'left', fontWeight: '400'}}>
              Hobi : Memancing
            </Text>
          </View>
          <Gap height={20} />
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                height: 130,
                width: 140,
                backgroundColor: 'white',
                borderRadius: 20,
                elevation: 8,
                padding: 10,
                alignItems: 'center',
              }}>
              <Text style={{color: Color.black, fontWeight: '500'}}>
                Skills
              </Text>
              <Gap height={10} />
              <Image source={icHtmlCss} style={{height: 80, width: 80}}></Image>
            </View>
            <Gap width={20} />
            <View
              style={{
                height: 130,
                width: 140,
                backgroundColor: 'white',
                borderRadius: 20,
                elevation: 8,
                padding: 10,
                alignItems: 'center',
              }}>
              <Text style={{color: Color.black, fontWeight: '500'}}>
                Framework
              </Text>
              <Gap height={10} />
              <View
                style={{
                  flexWrap: 'wrap',
                  paddingHorizontal: 10,
                }}>
                <Image source={icReact} style={{height: 40, width: 40}}></Image>
                <Image
                  source={icExpress}
                  style={{height: 40, width: 40}}></Image>
                <Image
                  source={icBootstrap}
                  style={{height: 40, width: 40}}></Image>
                <Image source={icNode} style={{height: 40, width: 40}}></Image>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
