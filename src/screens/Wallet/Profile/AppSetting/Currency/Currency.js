import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/Ionicons';
import {wp} from '../../../../../components/reusable/Dimension/Dimen';
import DarkButton from '../../../../../components/reusable/Button/DarkButton';
import Footer from '../../../../../components/reusable/Footer/Footer';

export default function Currency({navigation}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.view1}>
          <Text
            style={{
              fontFamily: 'Poppins-Light',
              marginRight: '60%',
            }}>
            Change Currency
          </Text>
          <Card cornerRadius={12} style={styles.card}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={styles.svgText}>$USD</Text>

              <Icon
                name="chevron-forward-sharp"
                color="#000000"
                size={18}
                style={{marginLeft: '82%'}}
              />
            </TouchableOpacity>
          </Card>

          <View style={{marginRight: wp(100), padding: 20}}>
            <Text style={{fontFamily: 'Poppins-Light'}}>
              Your Current Selected Currency is $USD
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.view3}>
        <DarkButton
          name="Update"
          onPress={() => navigation.navigate('AppSetting')}
        />
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
    flex: 0.4,
    width: wp(360),
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    flex: 1,
    width: wp(360),
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: 10,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(330),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    elevation: 2,
  },
  svgText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  view3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
