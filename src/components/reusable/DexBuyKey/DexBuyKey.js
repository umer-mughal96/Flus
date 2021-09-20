import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import {DexBuyKeySvg} from '../../../svgs/TopUpSvg/DexBuyKeySvg';

export default function DexBuyKey({navigation}) {
  return (
    <View style={style.container}>
      <View style={style.view1}>
        <View style={style.svgView}>
          <DexBuyKeySvg />
          <View
            style={{
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{marginTop: '-100%'}}>this is svg</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  view1: {
    flex: 1,
    backgroundColor: '#111B4F',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  svgView: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
