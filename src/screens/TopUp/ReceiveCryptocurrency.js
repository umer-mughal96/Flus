import React from 'react';
import {View, Text, Input, StyleSheet} from 'react-native';
import {wp, hp} from '../../components/reusable/Dimension/Dimen';
import DarkButton from '../../components/reusable/Button/DarkButton';
import {PlasmaPaySvg} from '../../svgs/TopUpSvg/BuyCryptSvg';
import {Card} from 'react-native-shadow-cards';
import {Divider} from 'react-native-elements';
export default function ReceiveCryptocurrency({navigation}) {
  return (
    <View style={style.container}>
      <View style={style.view1}>
        <PlasmaPaySvg />
      </View>
      <View style={style.view2}>
        <Card style={style.cardView}>
          <Text style={{fontFamily: 'Poppins-Regular', fontSize: 18}}>
            You will receive
          </Text>

          <Text
            style={{
              fontSize: 'Poppins-SemiBold',
              fontSize: 28,
              fontWeight: 'bold',
            }}>
            0.000005168 BTC
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Poppins-Regular',
              marginTop: '5%',
            }}>
            Best Rate at the moment
          </Text>
          <Text style={{fontFamily: 'Poppins-Bold', fontSize: 16}}>
            1 BTC = 45,826EUR
          </Text>
        </Card>
      </View>
      <View style={style.view3}>
        <DarkButton
          name="Next"
          onPress={() => navigation.navigate('GiftCardInfo')}
        />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  view1: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    flex: 0.5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: wp(360),
  },
  cardView: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    elevation: 3,
    width: wp(300),
    borderRadius: 15,
  },
  view3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
