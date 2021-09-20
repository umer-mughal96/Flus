import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Yearn_logo} from '../../svgs/Yearn_logo';

import {Card} from 'react-native-shadow-cards';
import {Send_logo} from '../../svgs/send';
import LinearGradient from 'react-native-linear-gradient';
import DarkButton from '../../../components/reusable/Button/DarkButton';
// import DarkButton from '../../components/reusable/Button/DarkButton';
// import {Success_logo} from '../svgs/SuccessLogo';

export default function TransactionSuccess({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignContent: 'center',
        justifyContent: 'center',
      }}>
      <Card
        style={{
          width: '80%',
          height: 375,
          alignSelf: 'center',
          flexDirection: 'column',
          borderRadius: 21,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.5,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 3,
        }}>
        {/* <Success_logo/> */}

        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            color: 'black',
            padding: 27,
            textAlign: 'center',
          }}>
          Your transaction is processed Successfully!
        </Text>
        <DarkButton
          name="Go to home"
          onPress={() => navigation.navigate('walletHome')}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {},
  carousel: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    flexDirection: 'column',
  },
  balanceCard: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  information: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomNavigation: {
    flex: 1,
    justifyContent: 'flex-end',
    alignSelf: 'baseline',
    bottom: 0,
    position: 'absolute',
    zIndex: 5,
  },
  image: {
    flex: 2,
    margin: (1, 10, 1, 10),
  },
  svgText: {
    color: 'white',
    fontSize: 10,
    marginTop: 5,
  },
  cardText: {
    textAlignVertical: 'center',

    marginLeft: 15,
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold',
  },

  totalBalance: {
    color: 'black',
    fontFamily: 'Poppins-Medium',
  },
});
