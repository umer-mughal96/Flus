import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Card} from 'react-native-shadow-cards';
import {Text, View} from 'react-native';
import {
  DollerSvg,
  ReferralCodeSvg,
  ShareSvg,
  UserSvg,
} from '../../../../svgs/RefferralSvgs';
import Footer from '../../../../components/reusable/Footer/Footer';

export default function Referral({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'Poppins-Bold',
            color: '#111B4F',
          }}>
          Invite a friend
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontFamily: 'Poppins-Regular',
          }}>
          Invite your friend to get bonus
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexDirection: 'row',
          alignSelf: 'center',
          width: wp(75),
        }}>
        <Card
          style={{
            backgroundColor: 'white',
            width: wp('30%'),
            height: hp('13%'),
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.2,
            elevation: 3,
          }}>
          <DollerSvg />
          <Text
            style={{
              color: '#111B4F',
              fontFamily: 'Poppins-Bold',
              fontSize: hp(2.5),
            }}>
            $344.89
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
            }}>
            Earned
          </Text>
        </Card>
        <Card
          style={{
            backgroundColor: 'white',
            width: wp('30%'),
            height: hp('13%'),
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 0.2,
            elevation: 3,
          }}>
          <UserSvg />

          <Text
            style={{
              color: '#111B4F',
              fontFamily: 'Poppins-Bold',
              fontSize: hp(2.5),
            }}>
            21 People
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Medium',
            }}>
            Referred
          </Text>
        </Card>
      </View>
      <View
        style={{
          flex: 2.9,
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Text
          style={{
            fontSize: hp(1.9),
            fontFamily: 'Poppins-Regular',
          }}>
          Referred Code
        </Text>

        <Card
          style={{
            borderColor: 'white',
            borderWidth: hp(0.2),
            borderRadius: hp(1.5),
            width: hp(30),
            elevation: 5,
            shadowColor: 'black',
            height: hp(7),
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              fontSize: hp(2),
            }}>
            asdhkasdka32113
          </Text>
        </Card>

        <View
          style={{
            height: hp(8),
            justifyContent: 'flex-end',
            height: hp(10),
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              fontSize: hp(2),
              textAlign: 'center',
              width: wp(88),
            }}>
            Refer Unlimited friends & receive 20.0% commission on every fee
            transaction they make
          </Text>
        </View>

        <View
          style={{
            height: hp(25),
            flexDirection: 'row',
            width: wp(80),
            alignSelf: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            marginTop: hp(2),
          }}>
          <Card
            style={{
              borderColor: 'white',
              borderWidth: hp(0.2),
              borderRadius: hp(1.5),
              width: hp(30),
              elevation: 5,
              shadowColor: 'black',
              height: hp(7),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ReferralCodeSvg />
              <Text style={{marginLeft: 10, fontSize: 18, color: '#111B4F'}}>
                Copy Referral Code
              </Text>
            </View>
          </Card>

          <Card
            style={{
              borderColor: 'white',
              borderWidth: hp(0.2),
              borderRadius: hp(1.5),
              width: hp(7),
              elevation: 5,
              justifyContent: 'flex-end',
              shadowColor: 'black',
              height: hp(7),
              marginLeft: hp(1),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ShareSvg />
          </Card>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}
