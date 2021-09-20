import React from 'react';
import {Text, View} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import QrCodeScanner from '../../../components/reusable/Qrcodde/Qrcode';
// import QrCodeScanner from '../../components/reusable/Qrcodde/Qrcode';

export default function RecieveBtc() {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#111B4F',
          alignSelf: 'center',
          height: '100%',
          width: '100%',

          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
        }}>
        <View
          style={{
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'red',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              textAlign: 'center',
              color: 'white',
              fontSize: 22,
              fontFamily: 'Poppins-Medium',
              marginTop: '5%',
            }}>
            Send to you wallet
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              textAlign: 'center',
              color: 'white',
              fontFamily: 'Poppins-Light',
              fontSize: 15,
            }}>
            Which cryptocurrencies can I use?
          </Text>
        </View>
        <View
          style={{
            flex: 0.7,
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'red',
          }}>
          <QrCodeScanner />
        </View>
        <View
          style={{
            // flex: 3,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 28,
              color: 'white',
              fontFamily: 'Poppins-Medium',
            }}>
            You Wallet address
          </Text>

          <Text
            style={{
              color: '#F5F5F5',
              textAlign: 'center',
              fontSize: 12,
              fontFamily: 'Poppins-Light',
            }}>
            0x89564C3161894f64GSDG6
          </Text>
          <Text
            style={{
              color: '#F5F5F5',
              textAlign: 'center',
              fontSize: 12,
              fontFamily: 'Poppins-Light',
            }}>
            SBD5c4d.06661A9X116Cd
          </Text>

          <Card
            style={{
              // m: 20,
              marginTop: 20,
              backgroundColor: 'white',
              borderRadius: 16,
              width: '45%',
              alignSelf: 'center',
              height: 50,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#111B4F',
                fontSize: 18,
                fontFamily: 'Poppins-Regular',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              Share
            </Text>
          </Card>

          <Text
            style={{
              marginTop: 20,
              color: 'white',
              fontSize: 15,
              fontWeight: 'normal',
              alignSelf: 'center',
            }}>
            Copy
          </Text>
        </View>
      </View>
    </View>
  );
}
