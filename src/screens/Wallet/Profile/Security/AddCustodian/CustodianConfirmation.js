import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
import {wp, hp} from '../../../../../components/reusable/Dimension/Dimen';
import DarkButton from '../../../../../components/reusable/Button/DarkButton';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import Footer from '../../../../../components/reusable/Footer/Footer';

export default function CustodianConfirmation({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.view1}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              textAlign: 'center',
              fontSize: 16,
            }}>
            All Cutodian details to recover your account
          </Text>
        </View>
        <View style={styles.view2}>
          <TextInput
            style={
              Platform.OS === 'ios' ? styles.TextInputIos : styles.TextInputAndr
            }
            // onChangeText={text => validate(text)}
            //   value={email}
            placeholder="Email verification code"
          />
          <TextInput
            style={
              Platform.OS === 'ios' ? styles.TextInputIos : styles.TextInputAndr
            }
            // onChangeText={text => validate(text)}
            //   value={email}
            placeholder="Phone number verification code"
          />
        </View>

        <View style={styles.view3}>
          <DarkButton
            name="Confirm"
            onPress={() => navigation.navigate('Security')}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            maxHeight: '19%',

            width: wp(360),
          }}>
          <Footer navigation={navigation} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  view1: {
    flex: 0.4,
    width: wp(230),
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    flex: 1,
    width: wp(360),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  view3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInputIos: {
    width: wp(300),
    margin: 5,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    elevation: 3,
  },
  TextInputAndr: {
    width: wp(300),
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    // marginBottom: hp('1%'),
    margin: 8,
    elevation: 3,
  },
});
