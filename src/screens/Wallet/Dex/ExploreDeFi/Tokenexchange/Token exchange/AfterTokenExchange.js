import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AppRegistry,
} from 'react-native';

// import Bitcoin from 'react-native-bitcoinjs-lib';
// import 'react-native-get-random-values';
// import '@ethersproject/shims';
// import {ContractFactory, ethers} from 'ethers';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../../../../../config/colors';
import {registerUser} from '../../../../../../redux/actions/user/user';

export default function AfterTokenExchange({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor={'white'}
        translucent={true}
      />
      <View style={styles.textContainer}>
        <View
          style={{
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            overflow: 'hidden',
            backgroundColor: colors.main,
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
        <TouchableOpacity
          style={styles.buttonWrapper}
          onPress={() => navigation.navigate('Token')}>
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
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
    backgroundColor: 'white',
  },
  buttonWrapper: {
    marginTop: 50,
    width: 200,
    padding: 10,
    backgroundColor: colors.main,
    textAlign: 'center',
    borderRadius: 12,
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    color: 'white',
  },
  textContainer: {
    flex: 2.5,
    justifyContent: 'flex-end',
    padding: (0, 30, 0, 30),
    color: 'white',
  },
  buttonContainer: {
    flex: 1.5,
  },
  textHeading: {
    backgroundColor: colors.main,
    padding: (6, 35, 6, 35),
    fontFamily: 'Poppins-Regular',

    fontSize: 14,
    color: 'white',
    textAlign: 'justify',
  },
});

// AppRegistry.registerComponent('AfterMobileVerify', () => AfterMobileVerify);
