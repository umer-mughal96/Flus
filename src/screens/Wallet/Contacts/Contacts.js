import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
import {wp, hp} from '../../../components/reusable/Dimension/Dimen';
import {Icon_ionic_ios_add_circle} from '../../../svgs/ContactSvg';
import {Card} from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/AntDesign';
import Footer from '../../../components/reusable/Footer/Footer';

export default function Contacts({navigation}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <View style={styles.view1}>
          <Icon_ionic_ios_add_circle />
          <Text style={styles.textview1}>Add new contact</Text>
        </View>
        <View style={styles.cardview}>
          <Card cornerRadius={12} style={styles.card}>
            <Icon name="search1" color="#111B4F" size={20} />
            <Text style={styles.text}>Search</Text>
          </Card>
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
    backgroundColor: 'white',
  },
  view1: {
    flex: 0.2,
    alignItems: 'center',
    flexDirection: 'row',
    width: wp(288),
  },
  textview1: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    paddingLeft: wp(12.8),
  },
  card: {
    flex: 0.1,
    padding: 10,
    flexDirection: 'row',
    marginTop: 10,
    width: wp(288),
    // height: hp(32),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    elevation: 10,
  },
  cardview: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  text: {
    fontFamily: 'poppins-light',
    fontSize: 16,
    marginLeft: 10,
  },
});
