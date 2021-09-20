import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, View, TextInput} from 'react-native';
import {colors} from '../../config/colors';

import {useDispatch} from 'react-redux';
import {registerUser} from '../../redux/actions/user/user';
import DarkButton from '../../components/reusable/Button/DarkButton';
// import DarkButton from '../../components/reusable/Button/DarkButton';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import {wp, hp} from '../../components/reusable/Dimension/Dimen';

export default function RecoverySeedSinUp({navigation}) {
  const [recoverySeed] = useState('');
  const dispatch = useDispatch();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="white"
          translucent={true}
        />
        <View style={styles.firstBox}>
          <Text style={styles.RecoverySeed}>Recovery Seed</Text>
          <TextInput
            style={
              Platform.OS === 'ios'
                ? styles.input
                : {
                    width: wp(200),
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
            value={recoverySeed}
            placeholder="SA122134PPKIASD"
          />
          {/* value="SA122134PPKIASD" */}
        </View>

        <View style={styles.secondBox}>
          <Text style={styles.RecoverySeed}>
            Save this recovery seed,This will be required to recover your YFIC
            Wallet account
          </Text>
          <DarkButton
            name="Update"
            onPress={() => navigation.navigate('signin')}
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
  RecoverySeed: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 26,
  },
  input: {
    width: wp(200),
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    elevation: 3,
  },
  secondBox: {
    flex: 1.5,
    padding: (0, 20, 0, 20),
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: wp(280),
  },
  firstBox: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
