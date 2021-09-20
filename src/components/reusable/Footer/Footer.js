import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PathSvg from '../../../svgs/PathSvg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  DefiSvg,
  WalletSvg,
  MenuSvg,
  UsersSvg,
  ProfileSvg,
} from '../../../svgs/WalletHomeSvgs';

export default function Footer({navigation}) {
  return (
    <View style={styles.bottomNavigation}>
      <View style={{justifyContent: 'flex-end'}}>
        <PathSvg />
      </View>

      <DefiSvg navigation={navigation} />
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          height: hp('8.5'),
        }}>
        <WalletSvg navigation={navigation} />
        <MenuSvg navigation={navigation} />
        <Text
          style={{
            width: wp('20%'),
            textAlign: 'center',
            fontSize: hp('1.5'),
            color: 'white',
            marginTop: hp('3'),
          }}>
          DEX
        </Text>
        <UsersSvg navigation={navigation} />
        <ProfileSvg navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNavigation: {
    flex: 1,
    // backgroundColor: 'red'
    justifyContent: 'flex-end',
  },
});
