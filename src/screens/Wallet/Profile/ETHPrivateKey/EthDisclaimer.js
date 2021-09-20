import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import 'react-native-get-random-values';
import DarkButton from '../../../../components/reusable/Button/DarkButton';

export default function EthDiscalaimer({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 18,
            marginLeft: '36%',
            marginBottom: '10%',
          }}>
          Disclaimer
        </Text>

        <View
          style={{
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            overflow: 'hidden',
            backgroundColor: '#111B4F',
          }}>
          <Text style={styles.textHeading}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <DarkButton
          name="I Agree"
          onPress={() => navigation.navigate('ETHPrivateKey')}
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
    backgroundColor: '#FFFFFF',
  },
  buttonWrapper: {
    marginTop: 50,
    width: 200,
    padding: 10,
    backgroundColor: 'white',
    textAlign: 'center',
    borderRadius: 12,
  },
  text: {
    textAlign: 'center',
    // color: '#ffff',
    fontFamily: 'Poppins-Regular',
  },
  textContainer: {
    flex: 2.5,
    justifyContent: 'flex-end',
    padding: (0, 30, 0, 30),
    // backgroundColor: '#111B4F',
  },
  buttonContainer: {
    flex: 1.5,
  },
  textHeading: {
    backgroundColor: '#111B4F',
    padding: (10, 30, 10, 30),
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
});
