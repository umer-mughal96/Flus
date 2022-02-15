import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import QrCodeScanner from '../../../components/reusable/Qrcodde/Qrcode';

export default function RecieveBtc() {
  return (
    <View style={styles.container}>
      <View style={styles.textWraper}>
        <Text style={styles.titleText}>Send to you wallet</Text>
        <Text style={{...styles.titleText, fontSize: 12, marginTop: 5}}>
          Which cryptocurrencies can I use?
        </Text>
      </View>
      <View style={styles.qrViewWrapper}>
        <QrCodeScanner />
      </View>
      <View
        style={{
          justifyContent: 'center',
        }}>
        <Text
          style={{
            ...styles.titleText,
            fontFamily: 'Poppins-Medium',
          }}>
          You Wallet address
        </Text>

        <Text
          style={{
            ...styles.titleText,
            fontSize: 12,
            marginTop: 5,
            fontFamily: 'Poppins-Light',
          }}>
          SBD5c4d832838832806661A9X116Cd
        </Text>

        <Card style={styles.btnCard}>
          <Text style={styles.btnText}>Share</Text>
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
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#111B4F'},
  textWraper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: 26,
    fontFamily: 'Poppins-Medium',
    marginTop: '15%',
    textAlign: 'center',
  },
  qrViewWrapper: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCard: {
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 16,
    width: '45%',
    alignSelf: 'center',
    height: 50,
    justifyContent: 'center',
  },
  btnText: {
    color: '#111B4F',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
