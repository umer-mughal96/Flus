import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Card} from 'react-native-shadow-cards';
import {TextInput, Text, View} from 'react-native';

export default function Topup_Order() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 3,
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Card
          style={{
            width: wp('80%'),
            height: hp('45%'),
            alignSelf: 'center',
            flexDirection: 'column',
            borderRadius: 21,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 1,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 15,
          }}>
          <View
            style={{
              flex: 1,
            }}>
            <View style={{flex: 1, justifyContent: 'center'}}>
              <Text style={{color: '#0B7F42', fontSize: hp('2%')}}>
                Start your Order
              </Text>
            </View>
            <View style={{flex: 3}}>
              <Card
                style={{
                  borderRadius: 8,
                  height: hp('7%'),
                  justifyContent: 'center',
                  alignContent: 'center',

                  borderWidth: 1,
                  borderColor: '#0B7F42',
                  width: wp('65%'),
                  alignSelf: 'center',
                }}>
                {/* <Text style={{left:13, top:7, fontWeight:'bold'}}>
Your Amount
</Text> */}

                <View style={{flexDirection: 'row', flex: 1}}>
                  <Text
                    style={{
                      alignItems: 'center',
                      alignSelf: 'center',
                      fontSize: hp('2.5%'),
                      textAlign: 'left',
                      paddingLeft: hp('2%'),
                    }}>
                    BTC
                  </Text>
                  <Text
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      alignSelf: 'center',
                      textAlign: 'right',
                      fontSize: hp('2.5%'),
                      paddingRight: hp('2%'),
                    }}>
                    $39668.40
                  </Text>
                </View>
              </Card>

              <Card
                style={{
                  borderRadius: 8,
                  borderWidth: 1,
                  borderColor: 'red',
                  borderColor: '#0B7F42',
                  alignSelf: 'center',
                  height: hp('10%'),
                  width: wp('65%'),
                  marginTop: 15,
                }}>
                <Text style={{left: 13, top: 7}}>
                  How much you want to send?
                </Text>
              </Card>
              <Card
                style={{
                  borderRadius: 8,
                  height: 78,
                  marginTop: -40,

                  borderWidth: 0.5,
                  borderColor: '#0B7F42',
                  width: wp('65%'),
                  alignSelf: 'center',
                }}>
                <Text style={{left: 13, top: 7, fontWeight: 'bold'}}>
                  Your Amount
                </Text>

                <View style={{flexDirection: 'row', top: 3}}>
                  <TextInput
                    style={{
                      left: hp('1%'),
                      top: hp('0.5%'),
                      fontWeight: 'bold',
                      fontSize: hp('2%'),
                      textContentType: 'number',
                      color: 'black',
                    }}
                    placeholder="$000.0"
                    keyboardType="decimal-pad"></TextInput>
                </View>
              </Card>
            </View>
            <View style={{flex: 1, backgroundColor: 'red'}}></View>
          </View>
        </Card>
      </View>
      <View
        style={{
          flex: 2,
          backgroundColor: 'blue',
        }}></View>
    </View>
  );
}
