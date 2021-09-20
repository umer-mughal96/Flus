import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DarkButton from '../../components/reusable/Button/DarkButton';
// import DarkButton from '../src/components/reusable/Button/DarkButton';

export default function PlasmaPay1() {
  const [selectedValue, setSelectedValue] = useState('java');
  return (
    <View style={styles.container}>
      <View style={styles.view3}>
        <Text
          style={{fontSize: hp('5%'), fontWeight: 'bold', textAlign: 'center'}}>
          PlasmaPay
        </Text>

        <Text
          style={{
            fontSize: hp('2.5%'),
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Buy Cryptocurrency with card
        </Text>
      </View>
      <View style={styles.view1}>
        <View
          style={{
            justifyContent: 'space-around',
            alignItems: 'center',
            height: hp('45%'),
            width: wp('80%'),
            borderRadius: 20,
            backgroundColor: 'white',
            elevation: 8,
          }}>
          <Text style={{color: '#0B7F42', fontWeight: 'bold', fontSize: 25}}>
            Select Cryptocurrency
          </Text>
          <View
            style={{
              borderWidth: 0.2,
              width: wp('70%'),
              borderRadius: 10,
            }}></View>
          <View
            style={{
              borderWidth: 0.2,
              width: wp('70%'),
              borderRadius: 10,
            }}></View>
          <Text>Min:100.00 EUR, Max 11,897.82 EUR</Text>
          <TextInput
            style={styles.text1}
            placeholder="adasdn4531ads15a1d3w1aw1d"></TextInput>
        </View>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <DarkButton name="Next" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view1: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    width: wp('80%'),
  },
  view2: {
    flex: 2.5,
    justifyContent: 'space-around',
    alignItems: 'center',

    width: wp('100%'),
  },
  view3: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
  },
  text1: {
    height: 80,
    width: 280,
    margin: 12,
    borderWidth: 0.25,
    borderRadius: 15,
    padding: 10,
    borderBottomColor: '#0B7F42',
  },
});
