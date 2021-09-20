import React, {useRef} from 'react';
import {View, Button, Text} from 'react-native';
import {color} from 'react-native-elements/dist/helpers';
import RBSheet from 'react-native-raw-bottom-sheet';
import {colors} from '../../../config/colors';
import {UpSvg} from '../../../svgs/WalletHomeSvgs';

export default function BottomCamera() {
  const refRBSheet = useRef();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.main,
        // backgroundColor: 'red',
        // borderTopLeftRadius: 51,
        // borderTopRightRadius: 51,
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <UpSvg />

        <Text
          style={{
            color: 'white',
            fontFamily: 'Poppins-Medium',
            fontSize: 18,
            marginTop: -12,
          }}>
          Scan Ethereum address
        </Text>

        <Text
          style={{
            color: 'white',
            fontFamily: 'Poppins-Light',
            fontSize: 14,
            marginTop: -6,
          }}>
          {' '}
          To send money
        </Text>

        <UpSvg></UpSvg>

        <Text
          style={{
            color: 'white',
            fontFamily: 'Poppins-Medium',
            fontSize: 18,
            marginTop: -8,
          }}>
          Connect to a Dapp
        </Text>

        <Text
          style={{
            color: 'white',
            fontFamily: 'Poppins-Light',
            fontSize: 14,
            marginTop: -6,
          }}>
          via WalletConnect
        </Text>
      </View>
    </View>
  );
}
