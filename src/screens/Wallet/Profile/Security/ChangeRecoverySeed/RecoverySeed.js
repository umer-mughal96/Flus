import React, {useState} from 'react';
import {StatusBar, StyleSheet, Text, View, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import DarkButton from '../../../../../components/reusable/Button/DarkButton';
import {wp, hp} from '../../../../../components/reusable/Dimension/Dimen';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
export default function RecoverySeed({navigation}) {
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
          <Text style={styles.RecoverySeed}>Enter your new Recovery seed</Text>
          <TextInput
            style={
              Platform.OS === 'ios'
                ? styles.input
                : {
                    width: wp(230),
                    padding: 15,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    shadowColor: '#000',
                    shadowOffset: {width: 0, height: 0},
                    shadowOpacity: 0.2,

                    elevation: 3,
                  }
            }
            // onChangeText={text => validate(text)}
            // value={recoverySeed}
            placeholder="SA122134PPKIASD"
          />
        </View>

        <View style={styles.secondBox}>
          <DarkButton
            name="Confirm"
            onPress={() => navigation.navigate('Security')}
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
    marginBottom: 44,
  },
  input: {
    width: wp(230),
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    elevation: 5,
  },
  secondBox: {
    flex: 2,
    padding: (0, 20, 0, 20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstBox: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
