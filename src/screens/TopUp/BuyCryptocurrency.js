import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {wp, hp} from '../../components/reusable/Dimension/Dimen';
import {Dropdown} from 'react-native-element-dropdown';
import DarkButton from '../../components/reusable/Button/DarkButton';
import {PlasmaPaySvg} from '../../svgs/TopUpSvg/BuyCryptSvg';
import {Card} from 'react-native-shadow-cards';

export default function BuyCryptocurrency({navigation}) {
  const [dropdown, setDropdown] = useState(null);
  const [seletedObject, setSelectedObject] = useState('');

  const [dropdown2, setDropdown2] = useState([]);
  const [seletedObject2, setSelectedObject2] = useState('');
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
      <View style={style.item}>
        <Text style={style.textItem}>{item.label}</Text>
        <Image style={style.icon} source={{uri: item.url}} />
      </View>
    );
  };
  const _renderItem2 = item2 => {
    return (
      <View style={style.item}>
        <Text style={style.textItem}>{item2.label}</Text>
        <Image style={style.icon} source={{uri: item2.url}} />
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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.Container}>
        <View style={style.view1}>
          <PlasmaPaySvg />
          <Text style={style.TextView}>Buy Cryptocurrency with card</Text>
        </View>
        <SafeAreaView
          style={{
            flex: 0.5,
            // backgroundColor: 'red',
            justifyContent: 'flex-start',
          }}>
          <ScrollView>
            <View
              style={{
                flex: 0.5,
                justifyContent: 'flex-start',
                alignItems: 'center',
                // backgroundColor: 'red',
                height: hp(390),
                marginTop: '2%',
                marginBottom: '2%',
              }}>
              <Card style={style.CardWapper}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'Poppins-Bold',
                      color: '#111B4F',
                    }}>
                    Select Cryptocurrency
                  </Text>
                </View>
                <View
                  style={{
                    // justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                  }}>
                  <Card style={style.BtcView}>
                    <Image
                      style={style.icons}
                      source={{uri: seletedObject?.url}}
                    />
                    <Text
                      style={{
                        fontFamily: 'Poppins-Medium',
                        fontSize: 14,
                        marginRight: '40%',
                      }}>
                      {seletedObject?.label ? seletedObject?.label : 'Choose'}
                    </Text>
                    <Dropdown
                      style={style.dropdownView}
                      containerStyle={
                        Platform.OS === 'ios'
                          ? style.IosDropContainer
                          : style.AndrDropContainer
                      }
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
                        <Image
                          style={style.icon}
                          source={{uri: seletedObject?.url}}
                        />
                      )}
                    />
                  </Card>
                  <Card style={style.cardWarpper2}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: 'Poppins-Regular',
                        marginTop: '5%',
                      }}>
                      How much you want to buy
                    </Text>
                  </Card>
                  <Card style={style.cardView}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Regular',
                        fontSize: 14,
                        marginLeft: '5%',
                      }}>
                      Your Amount
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}>
                      <TextInput
                        style={{
                          fontFamily: 'Poppins-SemiBold',
                          fontSize: 14,
                          marginLeft: '5%',

                          width: wp(100),
                        }}
                        placeholder="$00.00"
                      />
                      <Dropdown
                        style={style.dropdownView}
                        containerStyle={
                          Platform.OS === 'ios'
                            ? style.IosDropContainer
                            : style.AndrDropContainer
                        }
                        data={data}
                        labelField="label"
                        valueField="value"
                        label="Dropdown"
                        placeholder="Select"
                        value={dropdown2}
                        maxHeight={130}
                        onChange={onValueChangeHandler2}
                        renderItem={item => _renderItem2(item)}
                        textError="Error"
                        renderLeftIcon={() => (
                          <Image
                            style={style.icon}
                            source={{uri: seletedObject2?.url}}
                          />
                        )}
                      />
                    </View>
                  </Card>
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: 'Poppins-Regular',
                        opacity: 0.5,
                      }}>
                      Min:100.00 EUR, Max 11,897.82 EUR
                    </Text>
                  </View>
                  <Card style={style.cardWarpper2}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: 'Poppins-Regular',
                        marginTop: '5%',
                      }}>
                      Wallet Address to Receive
                    </Text>
                  </Card>
                  <Card style={style.cardView1}>
                    <TextInput
                      style={{
                        fontFamily: 'Poppins-SemiBold',
                        fontSize: 14,
                        marginLeft: '5%',
                        textAlign: 'left',
                      }}
                      placeholder="adasdn4531ads15a1d3w1aw1d"
                    />
                  </Card>
                </View>
              </Card>
            </View>
          </ScrollView>
        </SafeAreaView>

        <View style={style.view3}>
          <DarkButton
            name="Next"
            onPress={() => navigation.navigate('ReceiveCryptocurrency')}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const style = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  view1: {
    // flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextView: {
    fontSize: 22,
    fontFamily: 'Poppins-Bold',
    width: wp(250),
    textAlign: 'center',
    color: '#111B4F',
    // backgroundColor: 'yellow',
  },

  CardWapper: {
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    elevation: 3,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
  },
  BtcView: {
    flex: 0.2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.0,
    elevation: 0,
    borderRadius: 10,
    width: wp(290),
    borderWidth: 0.2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dropdownView: {
    width: wp(90),
  },
  IosDropContainer: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginLeft: '80%',
    marginTop: '2%',
  },
  AndrDropContainer: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginLeft: '98%',
    marginTop: '-10%',
  },
  icon: {
    marginRight: 5,
    width: 30,
    height: 30,
  },
  icons: {
    marginLeft: '2%',
    width: 30,
    height: 30,
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
  cardWarpper2: {
    flex: 0.2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.0,
    elevation: 0,
    borderRadius: 10,
    width: wp(290),
    borderWidth: 0.2,
    alignItems: 'center',
    marginTop: '3%',
  },
  cardView: {
    flex: 0.2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.0,
    elevation: 0,
    borderRadius: 10,
    width: wp(290),
    borderWidth: 0.2,
    marginTop: '-6%',
  },
  cardView1: {
    flex: 0.2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.0,
    elevation: 0,
    borderRadius: 10,
    width: wp(290),
    borderWidth: 0.2,
    marginTop: '-6%',
    marginBottom: '5%',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  IosView3: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: wp(360),
    // height: hp(200),
    // backgroundColor: 'yellow',
  },
  AndrView3: {
    flex: 1.3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  view3: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
});
