import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Card} from 'react-native-shadow-cards';
import {Text, View} from 'react-native';
import {CopySvg, ETHSvg, ShareSvg} from '../../../../svgs/RefferralSvgs';
import Footer from '../../../../components/reusable/Footer/Footer';

export default function ETHPrivateKey({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
      }}>
      <View
        style={{
          flex: 1.5,
          justifyContent: 'center',
          alignItems: 'center',

        }}>
        <Card
          style={{
            borderRadius: 15,
            width: wp('60%'),
            height: hp('30%'),
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.3,
            elevation: 5,
          }}>
          <ETHSvg />
          <Text
            style={{
              fontSize: hp('2%'),
              fontFamily: 'Poppins-Medium',
            }}>
            ETH
          </Text>
          <Text
            style={{
              fontSize: hp('3%'),
              color: '#111B4F',
              fontFamily: 'Poppins-Regular',
            }}>
            Private Key
          </Text>
          <Text
            style={{
              // fontSize: hp('1.5%'),
              fontFamily: 'Poppins-Regular',
            }}>
            ASDF5S4F456FA
          </Text>
        </Card>
      </View>
   
   
     <View
        style={{
          flex: 0.9,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal:"12%"
          }}>
          <Card
            style={{
              backgroundColor: 'white',
              width: wp('25%'),
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Poppins-Regular',
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 0.3,
              elevation: 5,
            }}>
            <CopySvg />
            <Text>Copy</Text>
          </Card>
          <Card
            style={{
              backgroundColor: 'white',
              width: wp('25%'),
              height: hp('11%'),
              borderRadius: 15,
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Poppins-Regular',
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 0.3,
              elevation: 5,
            }}>
            <ShareSvg />
            <Text>Share</Text>
          </Card>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems:"center"
          }}>
          <Text
            style={{
              marginTop:"5%",
              width: wp('45'),
              alignItems: 'center',
              textAlign: 'center',
              textAlignVertical: 'center',
              fontSize: hp('1.5'),
              fontFamily: 'Poppins-Light',
            }}>
            Your country of residence is based on the Region setting of iPhone
          </Text>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}
