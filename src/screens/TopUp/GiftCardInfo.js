import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';
import {wp, hp} from '../../components/reusable/Dimension/Dimen';
import Footer from '../../components/reusable/Footer/Footer';
import {Card} from 'react-native-shadow-cards';
import {Platform} from 'react-native';
import DarkButton from '../../components/reusable/Button/DarkButton';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import {PlasmaPaySvg} from '../../svgs/TopUpSvg/BuyCryptSvg';
import RadioGroup from 'react-native-radio-buttons-group';

const radioButtonsData = [
  {
    id: '1',
    label: 'Save this card',
    value: ' ',
  },
];
export default function GiftCardInfo({navigation}) {
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.view}>
          <PlasmaPaySvg />
        </View>

        <View
          style={Platform.OS === 'ios' ? styles.viewIos1 : styles.viewandr1}>
          <Card
            style={
              Platform.OS === 'ios'
                ? styles.CardViewMainIos
                : styles.CardViewMainAndr
            }>
            <Card
              style={
                Platform.OS === 'ios' ? styles.CardViewIos : styles.CardViewAndr
              }>
              <Text
                style={{
                  // width: wp('60%'),
                  marginLeft: '5%',
                  fontSize: 18,
                }}>
                Card Number
              </Text>
              <TextInput style={styles.text1} placeholder="0000-0000-000" />
            </Card>
            <Card
              style={
                Platform.OS === 'ios' ? styles.CardViewIos : styles.CardViewAndr
              }>
              <Text
                style={{
                  width: wp(216),
                  marginLeft: '5%',
                  fontSize: 18,
                }}>
                Exp
              </Text>
              <TextInput style={styles.text1} placeholder="mm/yyyy" />
            </Card>
            <Card
              style={
                Platform.OS === 'ios' ? styles.CardViewIos : styles.CardViewAndr
              }>
              <Text
                style={{
                  width: wp(216),
                  marginLeft: '5%',
                  fontSize: 18,
                }}>
                CVC
              </Text>
              <TextInput style={styles.text1} placeholder="000" />
            </Card>
            <View style={styles.radioView}>
              <RadioGroup
                radioButtons={radioButtons}
                onPress={onPressRadioButton}
              />
            </View>
          </Card>
        </View>

        <View
          style={
            Platform.OS === 'ios' ? styles.BtnViewIos : styles.BtnViewAndr
          }>
          <DarkButton
            name="Purchased"
            onPress={() => navigation.navigate('walletHome')}
          />
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <Footer navigation={navigation} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  view: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    marginBottom: '5%',
  },
  viewandr1: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewIos1: {
    flex: 1.5,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  BtnViewAndr: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BtnViewIos: {
    flex: 0.3,
    // backgroundColor: 'red',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text1: {
    marginLeft: '5%',
    fontSize: 20,
  },
  CardViewAndr: {
    borderWidth: 0.4,
    borderColor: '#111B4F',
    borderRadius: 10,
    margin: 5,
    width: '89%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.0,
    elevation: 0,
  },
  CardViewIos: {
    // flex: 0.3,
    borderWidth: 0.4,
    borderColor: '#111B4F',
    borderRadius: 10,
    margin: 5,
    width: '89%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.0,
    elevation: 0,
    // backgroundColor: 'red',
  },
  BotomCardViewIos: {
    flex: 0.8,
    borderWidth: 0.4,
    borderColor: '#0B7F42',
    borderRadius: 10,
    margin: 5,
    width: wp(320),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.0,
    elevation: 0,
    // backgroundColor: 'red',
  },
  CardViewMainAndr: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    elevation: 5,
  },
  CardViewMainIos: {
    flex: 0.8,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    elevation: 3,
    marginTop: '5%',
  },
  BottomCardios: {
    flex: 0.4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    elevation: 5,
    justifyContent: 'center',
    marginTop: 10,
    // backgroundColor: 'red',
  },
  BottomCardAndr: {
    // flex: 0.2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    elevation: 5,
    justifyContent: 'center',
    marginTop: 10,
  },
  radioView: {
    marginRight: '50%',
  },
});
