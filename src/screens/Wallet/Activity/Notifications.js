import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
import {hp, wp} from '../../../components/reusable/Dimension/Dimen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';

import Ticksvgscreen from '../../../svgs/TickSvg';
import Footer from '../../../components/reusable/Footer/Footer';

export default function Notifications({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Card cornerRadius={12} style={styles.card}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              // onPress={() => alert('asdasd')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.text}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={() => alert('asdasd')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.text}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={() => alert('asdasd')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.text}>Recevied</Text>
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={() => alert('asdasd')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.text}>Finance</Text>
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={() => alert('asdasd')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.text}>Secuity</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <View style={styles.view3}>
          <Ticksvgscreen />

          <Text style={styles.svgText1}>
            Integrations with other contacts, apps and devices will appear here!
          </Text>
        </View>
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
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  card: {
    flex: 0.25,
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    width: '96%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    elevation: 3,
  },
  text: {
    fontFamily: 'Poppins-Medium',
    justifyContent: 'space-between',
    fontSize: 18,
    marginLeft: 13.5,
  },
  view3: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: wp(290),
  },
  svgText1: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Poppins-Light',
    marginTop: 10,
  },
});
