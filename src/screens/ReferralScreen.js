import React from 'react';
import {useState} from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TextInput,
  Platform,
} from 'react-native';
import DarkButton from '../components/reusable/Button/DarkButton';
import {referralScreen} from '../redux/actions/auth/auth';
import {useDispatch} from 'react-redux';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import {wp, hp} from '../components/reusable/Dimension/Dimen';
export default function ReferralScreen({navigation}) {
  const [refdata, setRefdata] = useState('');
  const [refcorrect, setrefcorrect] = useState(false);
  const dispatch = useDispatch();

  // const validate = text => {
  //   console.log(text);
  //   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  //   if (reg.test(text) === false) {
  //     setRefdata(text);
  //     setrefcorrect(false);
  //     return false;
  //   } else {
  //     setRefdata(text);
  //     setrefcorrect(true);
  //     saveData(text);
  //   }
  // };
  // const saveData = async text => {
  //   try {
  //     dispatch(referralScreen(text));
  //   } catch (e) {
  //     alert('Failed to save the data to the storage');
  //   }
  // };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="white"
          translucent={true}
        />
        <View style={styles.refWrapper}>
          <Text style={styles.refText}>Referral Code</Text>

          <TextInput
            style={
              Platform.OS === 'ios'
                ? styles.input
                : {
                    width: wp(250),
                    padding: 15,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 0},
                    shadowOpacity: 0.5,
                    elevation: 5,
                  }
            }
            // onChangeText={text => validate(text)}
            // value={refdata}
            placeholder="Referral Code"
          />
        </View>
        <View style={styles.view2}>
          <View style={{width: wp(268)}}>
            <Text style={styles.textcenter}>
              *You will only be eligible to receive your signup bonus after
              completing your account setup.
            </Text>
          </View>

          <View style={{flex: 1}}>
            <View style={styles.buttonsWrapper}>
              <DarkButton
                name="Contine"
                onPress={() => navigation.navigate('createPasscode')}
                // disabled={!refcorrect}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  refWrapper: {
    flex: 1,
    // marginTop: 150,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  refText: {
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    marginBottom: 60,
  },
  input: {
    width: wp(250),
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    elevation: 5,
  },
  buttonsWrapper: {
    // flex: 1,
    // justifyContent: 'center',
  },

  textcenter: {
    alignItems: 'center',
    fontFamily: 'Poppins-SemiBold',
    // marginTop: 20,
    textAlign: 'center',
  },
  view2: {
    flex: 1,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
