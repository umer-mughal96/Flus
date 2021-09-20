import React, {useEffect, useState} from 'react';
import {StyleSheet, StatusBar, Text, View} from 'react-native';
import DarkButton from '../../../../../components/reusable/Button/DarkButton';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {useSelector} from 'react-redux';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';

export default function SecurityConfirmPass({navigation}) {
  const [codeCreated, setCodeCreated] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [existingPasscode, setExistingPasscode] = useState('');

  const {passcode} = useSelector(state => state.Auth);

  useEffect(() => {
    setExistingPasscode(passcode);
  }, [passcode]);

  const isSucessfullyCreate = boolean => {
    setCodeCreated(boolean);
  };

  const [code, setCode] = useState('');
  let pinInput = React.createRef();

  const _checkCode = code => {
    if (code == '123456') {
      pinInput.current.shake().then(() => setCode(''));
      isSucessfullyCreate(false);
    }
  };

  const changeTextHandler = code => {
    setCode(code);
    if (code.length < 6) {
      isSucessfullyCreate(false);
    } else if (code !== existingPasscode) {
      alert('Passcode dont match');
    } else {
      setPasswordMatch(true);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="white"
          translucent={true}
        />

        <View style={styles.passcodeWrapper}>
          <Text style={styles.passcodeHeading}>
            Confirm your 6 Digit passcode
          </Text>
          <View>
            <SmoothPinCodeInput
              ref={pinInput}
              cellStyle={{
                borderBottomWidth: 2,
                borderColor: 'gray',
              }}
              cellStyleFocused={{
                borderColor: 'black',
              }}
              onFulfill={_checkCode}
              containerStyle={{marginLeft: 50, marginRight: 50}}
              codeLength={6}
              value={code}
              onTextChange={changeTextHandler}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.buttonsWrapper}>
          <DarkButton
            name="Update"
            onPress={() => navigation.navigate('Security')}
            disabled={!passwordMatch}
          />
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
    flex: 2.2,
    justifyContent: 'flex-end',
  },
  buttonsWrapper: {
    flex: 2,
    justifyContent: 'center',
  },
  loginText: {
    textAlign: 'center',
    marginTop: 50,
    fontFamily: 'Poppins-Medium',
  },
  passcodeHeading: {
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
});
