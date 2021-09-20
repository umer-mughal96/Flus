import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DarkButton from '../../../components/reusable/Button/DarkButton';

export default function Congratulation({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={{fontSize: 29, fontFamily: 'Poppins-Bold'}}>
          Congratulations
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Poppins-SemiBold',
            textAlign: 'center',
            marginTop: '10%',
          }}>
          Your Drau wallet accounthas been restored
        </Text>
      </View>
      <View style={styles.view2}>
        <DarkButton
          name="Proceed"
          onPress={() => navigation.navigate('walletHome')}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
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
