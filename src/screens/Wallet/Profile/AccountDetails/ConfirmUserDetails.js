import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DarkButton from '../../../../components/reusable/Button/DarkButton';
import Footer from '../../../../components/reusable/Footer/Footer';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
export default function ConfirmUserDetails({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 3}}>
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
            <TextInput
              style={
                Platform.OS === 'ios'
                  ? styles.input
                  : {
                      width: wp('85%'),
                      padding: 15,
                      backgroundColor: 'white',
                      borderRadius: 10,
                      shadowColor: '#000',
                      shadowOffset: {width: 0, height: 0},
                      shadowOpacity: 0.3,
                      marginBottom: hp('2.5%'),
                      elevation: 3,
                    }
              }
              // onChangeText={text => validate(text)}
              //   value={email}
              placeholder="Change Email"
            />
            <TextInput
              style={
                Platform.OS === 'ios'
                  ? styles.input
                  : {
                      width: wp('85%'),
                      padding: 15,
                      backgroundColor: 'white',
                      borderRadius: 10,
                      shadowColor: '#000',
                      shadowOffset: {width: 0, height: 2},
                      shadowOpacity: 0.5,

                      elevation: 5,
                    }
              }
              // onChangeText={text => validate(text)}
              //   value={email}
              placeholder="Change Phone number"
            />
          </View>

          <View style={styles.view3}>
            <DarkButton
              name="Confirm Changes"
              onPress={() => navigation.navigate('UserCofirmPass')}
            />
          </View>
        </View>
        <View style={{flex: 1, justifyContent: 'flex-end'}}>
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
  view1: {
    flex: 0.4,
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    flex: 1,
    width: wp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: 10,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('95%'),
    height: hp('7%'),
  },
  svgText: {
    fontSize: hp('2%'),
    fontFamily: 'Poppins-Regular',
  },
  view3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 320,
    margin: 5,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    elevation: 5,
  },
});
