import React from 'react';
import {View, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ticksvgscreen from '../../../svgs/TickSvg';
import DarkButton from '../../../components/reusable/Button/DarkButton';
import Footer from '../../../components/reusable/Footer/Footer';

export default function Exhange_Done({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 4,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: wp('80%'),
            height: hp('40%'),
            backgroundColor: '#FFFFFF',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.3,
            elevation: 4,
            borderRadius: 20,
          }}>
          <Ticksvgscreen />
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Poppins-SemiBold',
              textAlign: 'center',
              marginTop: hp(1),
              marginBottom: hp(1),
              width: wp('60%'),
            }}>
            Your request has been processed successfully
          </Text>
          <DarkButton
            name="Go to home"
            onPress={() => navigation.navigate('walletHome')}
          />
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}
