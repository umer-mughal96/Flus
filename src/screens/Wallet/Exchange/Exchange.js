import React from 'react';
import {View, Text, TextInput, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Dropdown} from 'react-native-element-dropdown';
import {useState} from 'react';
import {ExchangeSvg, LogOutSvg} from '../../../svgs/ProfileSvgs';
import Footer from '../../../components/reusable/Footer/Footer';
import DarkButton from '../../../components/reusable/Button/DarkButton';

export default function Exchange({navigation}) {
  const [dropdown, setDropdown] = useState(null);
  const [seletedObject, setSelectedObject] = useState('');

  const [dropdown2, setDropdown2] = useState([]);
  const [seletedObject2, setSelectedObject2] = useState('');
  // console.log(dropdown2)
  const data = [
    {
      label: 'BTC',
      value: '1',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/1200px-BTC_Logo.svg.png',
    },
    {
      label: 'ETH',
      value: '2',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png',
    },
    {
      label: 'YFIC',
      value: '3',
      url: 'https://s3.us-east-2.amazonaws.com/nomics-api/static/images/currencies/YFIC3.jpeg',
    },
  ];

  const _renderItem = item => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        <Image style={styles.icon} source={{uri: item.url}} />
      </View>
    );
  };
  const _renderItem2 = item2 => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item2.label}</Text>
        <Image style={styles.icon} source={{uri: item2.url}} />
      </View>
    );
  };

  const onValueChangeHandler = obj => {
    setSelectedObject(obj);
    setDropdown(obj.value);
  };
  const onValueChangeHandler2 = obj => {
    setSelectedObject2(obj);
    setDropdown2(obj.value);
  };
  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 4}}>
        <View style={styles.view1}>
          <View style={styles.view2}>
            <View
              style={{
                flexDirection: 'column',
              }}>
              <Text style={styles.text1}>From</Text>

              <TextInput
                style={styles.inputtext1}
                placeholder="00.00"
                placeholderTextColor="grey"
                keyboardType="decimal-pad"></TextInput>
            </View>

            <Dropdown
              style={styles.dropdown}
              containerStyle={styles.shadow}
              data={data}
              labelField="label"
              valueField="value"
              label="Dropdown"
              placeholder="Select"
              value={dropdown}
              maxHeight={130}
              onChange={onValueChangeHandler}
              renderItem={item => _renderItem(item)}
              textError="Error"
              renderLeftIcon={() => (
                <Image style={styles.icon} source={{uri: seletedObject?.url}} />
              )}
            />
          </View>
          <ExchangeSvg />

          <View style={styles.view2}>
            <View
              style={{
                flexDirection: 'column',
              }}>
              <Text style={styles.text1}>To</Text>
              <TextInput
                style={styles.inputtext1}
                placeholder="00.00"
                placeholderTextColor="grey"
                keyboardType="decimal-pad"></TextInput>
            </View>

            <Dropdown
              style={styles.dropdown}
              containerStyle={styles.shadow}
              data={data}
              labelField="label"
              valueField="value"
              label="Dropdown2"
              placeholder="Select"
              value={dropdown2}
              maxHeight={130}
              onChange={onValueChangeHandler2}
              renderItem={item2 => _renderItem2(item2)}
              textError="Error"
              renderLeftIcon={() => (
                <Image
                  style={styles.icon}
                  source={{uri: seletedObject2?.url}}
                />
              )}
            />
          </View>

          <DarkButton
            name="Next"
            onPress={() => navigation.navigate('exchangeverify')}></DarkButton>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    marginRight: 5,
    width: 18,
    height: 18,
  },
  view1: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('80%'),
    height: hp('35%'),
    backgroundColor: 'white',
    elevation: 5,
    borderRadius: 20,
  },
  view2: {
    borderRadius: hp(2),
    borderWidth: hp(0.05),
    borderColor: 'black',
    height: hp(9),
    width: hp(30),
    paddingLeft: hp(1),
    marginBottom: hp(2),
    flexDirection: 'row',
    marginTop: hp(1),
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
    width: wp(30),
  },
  text1: {
    marginTop: hp(1),

    fontFamily: 'Poppins-Regular',
    marginLeft: hp(0.4),
  },
  inputtext1: {
    color: 'black',
    height: hp(7),
    width: hp(15),
    marginTop: hp(-1.6),
    textDecorationColor: 'black',
    fontFamily: 'Poppins-Bold',
  },

  text5: {
    fontFamily: 'Poppins-Bold',
    color: 'white',
    textAlign: 'center',
    fontSize: hp(2),
  },
  signup: {
    marginTop: 10,
    width: 200,
    height: 40,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
  },
  dropdown: {
    marginTop: 20,
    width: hp(12),
    marginLeft: 15,
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
});
