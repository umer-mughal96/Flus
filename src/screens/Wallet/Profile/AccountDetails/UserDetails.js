import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Card} from 'react-native-shadow-cards';
import {Switch} from 'react-native-switch';
import DarkButton from '../../../../components/reusable/Button/DarkButton';
import Footer from '../../../../components/reusable/Footer/Footer';

export default function UserDetails({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 2}}>
        <View style={styles.view1}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              fontSize: hp('3.5%'),
              color: '#111B4F',
            }}>
            Username.YFIC.app
          </Text>
          <Text style={styles.svgText}>All details of your Account</Text>
        </View>
        <View style={styles.view2}>
          <Card cornerRadius={12} style={styles.card}>
            <Text style={styles.Textview}>+999-222-46433</Text>

            <Switch
              trackColor={{false: 'white', true: 'white'}}
              thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="white"
              onValueChange={toggleSwitch}
              value={isEnabled}
              style={{borderWidth: 0.9, borderColor: '#111'}}
              backgroundInactive={'#f0f0f0'}
              circleSize={25}
              circleActiveColor={'#111B4F'}
              backgroundActive={'#f0f0f0'}
            />
          </Card>
          <Card cornerRadius={12} style={styles.card}>
            <Text style={styles.Textview}>youremail@gmail.com</Text>

            <Switch
              trackColor={{false: 'white', true: 'white'}}
              thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="white"
              onValueChange={toggleSwitch1}
              value={isEnabled1}
              style={{borderWidth: 0.9, borderColor: '#111'}}
              backgroundInactive={'#f0f0f0'}
              circleSize={25}
              circleActiveColor={'#111B4F'}
              backgroundActive={'#f0f0f0'}
            />
          </Card>
        </View>
      </View>

      <View style={styles.view3}>
        <DarkButton
          name="Change Details"
          onPress={() => navigation.navigate('ConfirmUserDetails')}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 0.19,
    padding: 11,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    elevation: 5,
    width: wp('95%'),
  },
  svgText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  Textview: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
  },
  view3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
