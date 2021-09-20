import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Footer from '../../../components/reusable/Footer/Footer';
import DarkButton from '../../../components/reusable/Button/DarkButton';
import {WalletStatsSvg} from '../../../svgs/RefferralSvgs';
import {Divider} from 'react-native-elements';
import {LineChart} from 'react-native-chart-kit';
export default function WalletSats({navigation}) {
  // const screenWidth = Dimensions.get("window").width;
  const chartConfig = {
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#FFFFFF',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.view1}>
        <View
          style={{
            backgroundColor: 'white',
            width: wp('94%'),
            borderRadius: 20,
            elevation: 8,
          }}>
          <View
            style={{
              padding: 8,
              // width: wp('90'),
              flexDirection: 'row',
            }}>
            <WalletStatsSvg />
            <View style={{marginLeft: 10}}>
              <Text style={{fontFamily: 'Poppins-Bold', fontSize: 18}}>
                YearnCash
              </Text>
              <Text>YFIC/USD</Text>
            </View>
            <Text style={{fontFamily: 'Poppins-Light'}}>($YFIC)</Text>

            <View style={{marginLeft: wp('25')}}>
              <Text style={{fontFamily: 'Poppins-Light'}}>Rank</Text>
              <Text style={{fontFamily: 'Poppins-Bold'}}>#1572</Text>
            </View>
          </View>
          <Divider orientation="horizontal" width={2} color="#000" />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 2,
            }}>
            <Text style={{fontFamily: 'Poppins-Light'}}>Week</Text>
            <Text style={{fontFamily: 'Poppins-Light'}}>Month</Text>
            <Text style={{fontFamily: 'Poppins-Light'}}>Year</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 6,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                color: '#E90F0F',
                width: wp('30.33'),
              }}>
              -2.4%
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                color: '#0FE95F',
                width: wp('30.33'),
                textAlign: 'center',
              }}>
              +9.20%
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                color: '#0FE95F',
                textAlign: 'right',
                width: wp('30.33'),
              }}>
              +200.20%
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 6,
              width: wp('90'),
            }}>
            <Text style={{fontFamily: 'Poppins-Light'}}>Transp. Vol</Text>
            <Text style={{fontFamily: 'Poppins-Light'}}>Volume</Text>
            <Text style={{fontFamily: 'Poppins-Light'}}>+ATH</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 6,
            }}>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',
                color: '#E90F0F',
                width: wp('30.33'),
              }}>
              -
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',

                width: wp('30.33'),
                textAlign: 'center',
              }}>
              $13.4K
            </Text>
            <Text
              style={{
                fontFamily: 'Poppins-Bold',

                textAlign: 'right',
                width: wp('30.33'),
              }}>
              50%
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 6,
            }}>
            <Text style={{fontFamily: 'Poppins-Light'}}>Market Cap</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 7,
            }}>
            <Text style={{fontFamily: 'Poppins-Bold'}}>$205k</Text>
          </View>
        </View>
      </View>

      <View style={styles.view2}>
        <View
          style={{
            marginTop: 10,
            backgroundColor: 'white',
            width: wp('94%'),
            height: hp('33%'),
            borderRadius: 20,
            elevation: 8,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 5,
              width: wp('90'),
            }}>
            <Text style={{fontFamily: 'Poppins-Bold', marginLeft: '3%'}}>
              Yearn cash Chart
            </Text>
            <Text style={{fontFamily: 'Poppins-Bold'}}>24h</Text>
            <Text style={{fontFamily: 'Poppins-Medium'}}>Dec 2021</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              width: wp('90'),
            }}>
            <LineChart
              data={data}
              width={340}
              height={220}
              chartConfig={chartConfig}
            />
          </View>
        </View>
      </View>
      <View style={{flex: 0.4, justifyContent: 'center', alignItems: 'center'}}>
        <DarkButton name="Home" />
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    flex: 2.4,
    // height: hp('35'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 7,
  },
  view2: {
    flex: 2.4,
    // height: hp('35'),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
