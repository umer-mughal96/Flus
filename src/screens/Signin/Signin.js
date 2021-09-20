import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Input from '../../components/reusable/PasscodeInput/Input';
import Icon from 'react-native-vector-icons/AntDesign';
import {userLogin} from '../../redux/actions/auth/auth';
import {useDispatch, useSelector} from 'react-redux';
import DarkButton from '../../components/reusable/Button/DarkButton';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import {wp, hp} from '../../components/reusable/Dimension/Dimen';

export default function Signin({navigation}) {
  const [codeCreated, setCodeCreated] = useState(false);
  const [code, setCode] = useState(false);
  const [existingPasscode, setExistingPasscode] = useState('');
  const dispatch = useDispatch();
  const {passcode} = useSelector(state => state.Auth);
  const isSucessfullyCreate = (boolean, code) => {
    setCodeCreated(boolean);
    setCode(code);
  };

  useEffect(() => {
    setExistingPasscode(passcode);
  }, [passcode]);

  const loginHandler = () => {
    if (existingPasscode == code) {
      dispatch(userLogin());
      navigation.navigate('walletHome');
    } else {
      alert('Wrong Passcode');
      return;
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.passcodeWrapper}>
          <Text style={styles.passcodeHeading}>
            Put your 6 Digit passcode to login into your account
          </Text>
        </View>
        <Input login={true} isSucessfullyCreate={isSucessfullyCreate} />
        <View style={styles.buttonsWrapper}>
          <DarkButton
            name="Login"
            onPress={loginHandler}
            disabled={!codeCreated}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('ChoseRecoverySeed')}>
            <Text style={styles.restoreText}>Restore Yearn account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              marginTop: 10,
              paddingVertical: 15,
              paddingHorizontal: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate('createPasscode')}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.signupText}>Signup</Text>
              <Icon name="right" color="#000000" size={18} />
            </View>
          </TouchableOpacity>
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
  passcodeWrapper: {
    flex: 2.6,
    justifyContent: 'flex-end',
    width: wp(250),
  },
  buttonsWrapper: {
    flex: 2.6,
    justifyContent: 'center',
  },
  signupText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
  passcodeHeading: {
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
    // padding: (0, 80, 0, 80),
    justifyContent: 'center',
  },
  restoreText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },
});
