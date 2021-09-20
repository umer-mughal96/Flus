import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DarkButton from '../../../components/reusable/Button/DarkButton';
import Footer from '../../../components/reusable/Footer/Footer';
// import DarkButton from '../../../components/reusable/Button/DarkButton';

export default function SendEth({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={{fontFamily: 'Poppins-Medium'}}>Availale Balance</Text>
        <Text
          style={{
            fontSize: hp('3.5'),
            color: '#0B7F42',
            fontFamily: 'Poppins-SemiBold',
          }}>
          0.7544 ETH
        </Text>
        <Text style={{fontFamily: 'Poppins-medium'}}>$26,648.60</Text>
      </View>

      <View style={styles.view2}>
        <Card
          style={{
            width: wp('90%'),
            height: hp('50%'),
            alignSelf: 'center',
            borderRadius: 21,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.5,
            elevation: 5,
          }}>
          <Card
            style={{
              borderRadius: 8,
              borderWidth: 0.2,
              borderColor: '#0B7F42',
              alignSelf: 'center',
              height: 74,
              width: wp('85%'),
              marginTop: 15,
            }}>
            <Text
              style={{left: 13, marginTop: 7, fontFamily: 'Poppins-Regular'}}>
              How much you want to send?
            </Text>
          </Card>
          <Card
            style={{
              borderRadius: 8,
              height: hp('10%'),
              marginTop: -40,
              borderWidth: 0.2,
              borderColor: '#0B7F42',
              width: wp('85%'),
              alignSelf: 'center',
            }}>
            <Text
              style={{left: 13, marginTop: 4, fontFamily: 'poppins-Regular'}}>
              Your Amount
            </Text>

            <View style={{flexDirection: 'row', marginTop: 4}}>
              <TextInput
                style={{
                  marginLeft: 13,
                  marginTop: 7,
                  fontWeight: 'bold',
                  fontSize: 20,
                  width: wp('80%'),
                }}
                placeholder="$00.0"
                keyboardType="decimal-pad"></TextInput>
            </View>
          </Card>

          <Text
            style={{
              marginTop: 10,
              // left: 24,
              marginLeft: 24,
              fontFamily: 'Poppins-Regular',
              opacity: 0.3,
            }}>
            =7424.898BTC
          </Text>

          <Card
            style={{
              borderRadius: 8,
              borderWidth: 1,
              borderColor: 'red',
              borderWidth: 0.3,
              borderColor: '#0B7F42',
              alignSelf: 'center',
              height: 74,
              width: '95%',
              marginTop: 42,
            }}>
            <Text
              style={{left: 13, marginTop: 7, fontFamily: 'Poppins-Regular'}}>
              Wallet Address to Send
            </Text>
          </Card>
          <Card
            style={{
              borderRadius: 8,
              height: 78,
              marginTop: -40,

              borderWidth: 0.3,
              borderColor: '#0B7F42',
              width: '95%',
              alignSelf: 'center',
            }}>
            <TextInput
              style={{
                marginTop: 7,
                fontFamily: 'Poppins-Regular',
                fontSize: 14,
              }}
              placeholder="adasdn4531ads15a1d3w1"></TextInput>
          </Card>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginTop: hp('3'),
            }}>
            <DarkButton
              name="Next"
              onPress={() => navigation.navigate('TransactionConfromPass')}
            />
          </View>
        </Card>
      </View>

      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    flex: 3,
  },
});
