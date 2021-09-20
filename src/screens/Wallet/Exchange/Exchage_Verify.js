import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import DarkButton from '../../../components/reusable/Button/DarkButton';
import {BtcCircleSvgSmall, EthCircleSvgSmall} from '../../../svgs/ProfileSvgs';
import Btn from '../../../components/reusable/Button/LightButton';
import Footer from '../../../components/reusable/Footer/Footer';

export default function Exhange_Verify({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 3}}>
        <View style={styles.View1}>
          <Text style={styles.text1}>
            You requested to exchange following tokens
          </Text>

          <View style={styles.View2}>
            <Text style={styles.text2}>0.0034316</Text>

            <BtcCircleSvgSmall />
            <Text style={styles.text2}>BTC</Text>
          </View>

          <Text style={styles.text4}>to</Text>

          <View style={styles.View2}>
            <Text style={styles.text2}>0.0034316</Text>
            <EthCircleSvgSmall />
            <Text style={styles.text2}>ETH</Text>
          </View>
        </View>

        <View style={styles.view4}>
          <DarkButton
            name="Exchange"
            onPress={() => navigation.navigate('exchangedone')}
            disabled={false}
          />

          <Btn
            name="Back"
            onPress={() => navigation.navigate('exchange')}
            disabled={false}
          />
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF'},

  View1: {
    justifyContent: 'flex-end',
    width: wp('55%'),
    height: hp('50%'),
    flex: 2.2,
    marginBottom: hp(5),
  },
  View2: {
    flexDirection: 'row',
    marginTop: hp(1),
    justifyContent: 'center',
    alignItems: 'center',
  },

  text1: {
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    fontSize: 15,
  },
  text2: {
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    marginRight: hp(1),
    marginLeft: hp(1),
  },
  text4: {
    fontFamily: 'Poppins',
    color: 'grey',
    marginLeft: hp(4),
    justifyContent: 'flex-start',
  },
  view4: {
    flex: 2,
    justifyContent: 'flex-start',
  },
  card1: {
    width: wp(60),
    height: hp(5),
    backgroundColor: 'green',
    justifyContent: 'center',
    borderRadius: hp(2),
  },
  card2: {
    width: wp(60),
    height: hp(5),
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: hp(2),
    borderWidth: hp(0.2),
    borderColor: 'green',
    // top: hp(1),
    marginTop: hp(1),
  },
  text5: {
    fontFamily: 'Poppins-Bold',
    color: 'white',
    textAlign: 'center',
  },
  text6: {
    fontFamily: 'Poppins-Bold',
    color: 'green',
    textAlign: 'center',
  },
  signup: {
    marginTop: 10,
    width: 200,
    height: 40,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
});
