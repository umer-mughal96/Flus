import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {wp, hp} from '../../../components/reusable/Dimension/Dimen';
import Footer from '../../../components/reusable/Footer/Footer';
import {Icon_ionic_ios_add_circle} from '../../../svgs/ContactSvg';
export default function SendEth({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.Container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="white"
          translucent={true}
        />
        <View style={style.View1}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Poppins-Medium',
              marginTop: '10%',
            }}>
            SEND ETH
          </Text>
          <View style={style.InputWarpper}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'Poppins-Medium',
                marginBottom: '5%',
              }}>
              Enter address
            </Text>
            <TextInput style={style.InputText} placeholder="Enter Your Email" />
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 16,
                marginTop: '5%',
              }}>
              OR
            </Text>
          </View>
        </View>
        <View style={style.View2}>
          <Icon_ionic_ios_add_circle />
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Poppins-Medium',
              marginTop: '5%',
            }}>
            Scan QR code
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Transfer')}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 18,
                marginTop: '20%',
                textDecorationLine: 'underline',
              }}>
              Transfer or Gas fee?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1, maxHeight: '17%', justifyContent: 'flex-end'}}>
          <Footer navigation={navigation} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  View1: {
    flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  View2: {
    flex: 1,
    // backgroundColor: 'blue',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  InputWarpper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  InputText: {
    width: wp(250),
    padding: 14,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    elevation: 3,
  },
});
