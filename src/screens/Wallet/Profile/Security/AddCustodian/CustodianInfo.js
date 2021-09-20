import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, StatusBar} from 'react-native';
import {wp, hp} from '../../../../../components/reusable/Dimension/Dimen';
import DarkButton from '../../../../../components/reusable/Button/DarkButton';
import Footer from '../../../../../components/reusable/Footer/Footer';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';

export default function CustodianInfo({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="white"
          translucent={true}
        />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 2,
          }}>
          <View style={styles.view1}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
                textAlign: 'center',
              }}>
              All Cutodian details to recover your account
            </Text>
          </View>
          <View style={styles.view2}>
            <TextInput
              style={
                Platform.OS === 'ios' ? styles.TextInput1 : styles.TextInput2
              }
              // onChangeText={text => validate(text)}
              //   value={email}
              placeholder="First name & Last name"
            />
            <TextInput
              style={
                Platform.OS === 'ios' ? styles.TextInput1 : styles.TextInput2
              }
              // onChangeText={text => validate(text)}
              //   value={email}
              placeholder="Custodian Phone number"
            />
            <TextInput
              style={
                Platform.OS === 'ios' ? styles.TextInput1 : styles.TextInput2
              }
              // onChangeText={text => validate(text)}
              //   value={email}
              placeholder="Custodian Email"
            />
          </View>

          <View style={styles.view3}>
            <Text
              style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 16,
                textAlign: 'center',
              }}>
              A verification code will be sent to email and phone number to
              verify
            </Text>
            <DarkButton
              name="Next"
              onPress={() => navigation.navigate('Confirmation')}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            maxHeight: '19%',
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
    backgroundColor: 'white',
  },
  view1: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',

    width: wp(230),
  },
  view2: {
    flex: 1,

    color: 'black',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  card: {
    padding: 10,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(330),
    height: hp(100),
  },
  view3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(250),
  },
  TextInput1: {
    width: 330,
    margin: 5,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    color: 'black',

    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    elevation: 5,
  },
  TextInput2: {
    width: wp(330),
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    color: 'black',

    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    marginBottom: '5%',
    elevation: 3,
  },
});
