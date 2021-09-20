import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Input from '../../../components/reusable/PasscodeInput/Input';

import DarkButton from '../../../components/reusable/Button/DarkButton';

export default function TransactionConfirmPass({navigation}) {
  const [codeCreated, setCodeCreated] = useState(false);

  const isSucessfullyCreate = boolean => {
    setCodeCreated(boolean);
  };
  return (
    <View style={styles.container}>
      <View style={styles.passcodeWrapper}>
        <Text style={styles.passcodeHeading}>
          Put your 6 Digit passcode to Confirm the transaction
        </Text>
        <Input isSucessfullyCreate={isSucessfullyCreate} />
      </View>
      <View style={styles.buttonsWrapper}>
        <DarkButton
          name="Next"
          onPress={() => navigation.navigate('TransactionSuccess')}
          disabled={!codeCreated}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
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
    fontFamily: 'Poppins-Medium',
  },
  passcodeHeading: {
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
});
