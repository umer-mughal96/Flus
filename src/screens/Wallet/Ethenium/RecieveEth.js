import React from 'react';
import {Text, View} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import QrCodeScanner from '../../../components/reusable/Qrcodde/Qrcode';

export default function RecieveEth() {
  return (
    <View style={{flex: 1}}>
      <Card
        style={{
          borderRadius: 25,
          flex: 1,
          backgroundColor: '#0B7F42',
          alignSelf: 'center',
          height: '100%',
          width: '100%',
          marginTop: 5,
        }}>
        <View
          style={{
            flex: 1,

            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              textAlign: 'center',
              color: 'white',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Send to you wallet
          </Text>
          <Text
            style={{alignSelf: 'center', textAlign: 'center', color: 'white'}}>
            Which cryptocurrencies can I use?
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <QrCodeScanner />
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 28,
              color: 'white',
              fontWeight: 'bold',
            }}>
            You Wallet address
          </Text>

          <Text
            style={{
              color: '#F5F5F5',
              textAlign: 'center',
              fontSize: 12,
            }}>
            0x89564C3161894f64GSDG6
          </Text>
          <Text
            style={{
              color: '#F5F5F5',
              textAlign: 'center',
              fontSize: 12,
            }}>
            0x89564C3161894f64GSDG6
          </Text>

          <Card
            style={{
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
                color: '#0B7F42',
                fontSize: 18,
                fontWeight: 'bold',
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              Share
            </Text>
          </Card>

          <Text
            style={{
              marginTop: 25,
              color: 'white',
              fontSize: 15,
              fontWeight: 'normal',
              alignSelf: 'center',
            }}>
            Copy
          </Text>
        </View>
      </Card>
    </View>
  );
}
