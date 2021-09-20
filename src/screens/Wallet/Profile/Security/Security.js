import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {wp, hp} from '../../../../components/reusable/Dimension/Dimen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';
import {Switch} from 'react-native-switch';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  AddCustodianSvg,
  ChangePassSvg,
  ChangeRevSeedSvg,
  LoginFaceIdSvg,
  LoginFingerPrintSvg,
} from '../../../../svgs/SecuritySvgs';
import Footer from '../../../../components/reusable/Footer/Footer';
import DarkButton from '../../../../components/reusable/Button/DarkButton';
import {Platform} from 'react-native';

export default function Security({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Card cornerRadius={12} style={styles.card}>
          <TouchableOpacity
            onPress={() => navigation.navigate('RecoveryCofirmPass')}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ChangeRevSeedSvg />
            <Text
              style={
                Platform.OS === 'ios' ? styles.IosTextView : styles.AndrTextView
              }>
              Change Recovery Seed
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="chevron-forward-sharp"
              color="#111B4F"
              size={18}
              style={{marginLeft: '40%'}}
            />
          </TouchableOpacity>
        </Card>
        <Card cornerRadius={12} style={styles.card}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SecurityChangePass')}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ChangePassSvg />
            <Text
              style={
                Platform.OS === 'ios' ? styles.IosTextView : styles.AndrTextView
              }>
              Change Passcode
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="chevron-forward-sharp"
              color="#111B4F"
              size={18}
              style={{marginLeft: '53%'}}
            />
          </TouchableOpacity>
        </Card>
        <Card cornerRadius={12} style={styles.card}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <LoginFaceIdSvg />
            <Text
              style={
                Platform.OS === 'ios' ? styles.IosTextView : styles.AndrTextView
              }>
              Login with Face ID
            </Text>
          </View>

          <Switch
            trackColor={{false: 'white', true: 'white'}}
            thumbColor={isEnabled ? '#111B4F' : '#f4f3f4'}
            ios_backgroundColor="white"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{borderWidth: 0.2, borderColor: '#111B4F'}}
            backgroundInactive={'#f0f0f0'}
            circleSize={28}
            circleActiveColor={'#111B4F'}
            backgroundActive={'#f0f0f0'}
          />
        </Card>
        <Card cornerRadius={12} style={styles.card}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <LoginFingerPrintSvg />
            <Text
              style={
                Platform.OS === 'ios' ? styles.IosTextView : styles.AndrTextView
              }>
              Login With Fingerprint
            </Text>
          </View>

          <Switch
            trackColor={{false: 'white', true: 'white'}}
            thumbColor={isEnabled1 ? '#111B4F' : '#f4f3f4'}
            ios_backgroundColor="white"
            onValueChange={toggleSwitch1}
            value={isEnabled1}
            style={{borderWidth: 0.2, borderColor: '#111B4F'}}
            backgroundInactive={'#f0f0f0'}
            circleSize={28}
            circleActiveColor={'#111B4F'}
            backgroundActive={'#f0f0f0'}
          />
        </Card>
        <Card cornerRadius={12} style={styles.card}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CustodianInfo')}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AddCustodianSvg />
            <Text
              style={
                Platform.OS === 'ios' ? styles.IosTextView : styles.AndrTextView
              }>
              Add Custodian
            </Text>

            <Icon
              name="chevron-forward-sharp"
              color="#111B4F"
              size={18}
              style={{marginLeft: '40%'}}
            />
          </TouchableOpacity>
        </Card>
      </View>

      <View style={styles.view3}>
        <DarkButton
          name="Update"
          onPress={() => navigation.navigate('ProfileSetting')}
        />
      </View>

      <View
        style={{
          justifyContent: 'flex-end',
          backgroundColor: 'blue',
          maxHeight: '17%',
        }}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  view1: {
    flex: 0.8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  card: {
    padding: 10,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(330),
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    elevation: 3,
  },
  IosTextView: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    marginLeft: 5,
  },
  AndrTextView: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    marginLeft: 5,
  },
  view3: {
    flex: 0.4,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    width: 320,
    margin: 5,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 0},
    // shadowOpacity: 0.3,
    // elevation: 3,
  },
});
