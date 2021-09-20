import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import Btn from '../../../../components/reusable/Button/LightButton';

export default function Transfer({navigation}) {
  return (
    <View style={style.Container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
        translucent={true}
      />
      <View style={style.View1}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Poppins-Regular',
            color: 'white',
            marginBottom: '5%',
          }}>
          What is Transfer and Gas fee?
        </Text>
        <Card style={style.CardView}>
          <Text style={{fontFamily: 'Poppins-Regular', fontSize: 14}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic Lorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic
          </Text>
        </Card>
      </View>
      <View style={style.view2}>
        <Btn
          name="Back to home"
          onPress={() => navigation.navigate('walletHome')}
        />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111B4F',
  },
  CardView: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    padding: 19,
  },
  View1: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    flex: 0.5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
});
