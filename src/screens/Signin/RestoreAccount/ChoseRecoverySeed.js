import {styleSheets} from 'min-document';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DarkButton from '../../../components/reusable/Button/DarkButton';

export default function ChoseRecoverySeed({navigation}) {
  return (
    <View style={styles.Container}>
      <View style={styles.view1}>
        <Text
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: 18,
            textAlign: 'center',
          }}>
          Choose an option to Restore your Flux Wallet
        </Text>
      </View>
      <View style={styles.view2}>
        <DarkButton
          name="Recovery Seed"
          onPress={() => navigation.navigate('SigninRecoverySeed')}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
