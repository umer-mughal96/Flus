import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DarkButton from '../../../../components/reusable/Button/DarkButton';

export default function ReportBug({navigation}) {
  return (
    <View style={style.container}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>This is Report a Bug Screen</Text>
      </View>
      <View
        style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
        <DarkButton
          name="back"
          onPress={() => navigation.navigate('ProfileSetting')}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
