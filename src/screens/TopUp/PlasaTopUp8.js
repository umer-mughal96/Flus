import React from 'react';
import {View, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DarkButton from '../../components/reusable/Button/DarkButton';
import Ticksvgscreen from '../../svgs/TickSvg';
// import Ticksvgscreen from '../../src/svgs/ticksvg';

export default function PlasmaTopUp8({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: wp('80%'),
          height: hp('50%'),
          backgroundColor: 'white',
          elevation: 5,
          borderRadius: 20,
        }}>
        <Ticksvgscreen />
        <Text style={{fontSize: 22, fontWeight: 'bold', textAlign: 'center'}}>
          Your transaction is processed Successfully!
        </Text>
        <DarkButton
          name="Go to home"
          onPress={() => navigation.navigate('walletHome')}
        />
      </View>
    </View>
  );
}
