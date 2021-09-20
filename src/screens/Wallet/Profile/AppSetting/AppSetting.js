import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {wp, hp} from '../../../../components/reusable/Dimension/Dimen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  CurrencySvg,
  NotificationsSvg,
  TokenVisibilitySvg,
} from '../../../../svgs/ProfileSvgs';
import Footer from '../../../../components/reusable/Footer/Footer';

export default function AppSetting({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <View style={styles.view1}>
          <Card cornerRadius={12} style={styles.card}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Currency')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <CurrencySvg />

              <Text style={styles.TextView}>Currency</Text>

              <View style={{flexDirection: 'row', marginLeft: wp(160)}}>
                <Text style={{fontFamily: 'Poppins-Medium'}}>$USD</Text>
                <Icon name="chevron-forward-sharp" color="#000000" size={18} />
              </View>
            </TouchableOpacity>
          </Card>

          <Card cornerRadius={12} style={styles.card}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Notifications')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <NotificationsSvg />
              <Text style={styles.TextView}>Notifications</Text>

              <View style={{marginLeft: wp(170)}}>
                <Icon name="chevron-forward-sharp" color="#000000" size={18} />
              </View>
            </TouchableOpacity>
          </Card>

          <Card cornerRadius={12} style={styles.card}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TokenVisibilitySvg />
              <Text style={styles.TextView}>Token visibility</Text>
              <Icon
                name="chevron-forward-sharp"
                color="#000000"
                size={18}
                style={{marginLeft: wp(155)}}
              />
            </TouchableOpacity>
          </Card>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          // justifyContent: 'flex-end',
          maxHeight: '15%',
          maxWidth: wp(360),
        }}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: wp(360),
  },
  view1: {
    flex: 1,
    width: wp(330),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  card: {
    padding: 10,
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    width: wp(330),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    elevation: 2,
  },
  TextView: {
    fontSize: 15,
    marginLeft: 5,
    fontFamily: 'Poppins-Medium',
  },
});
