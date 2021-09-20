import React from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  ButtonSendUpSvg2,
  RecieveDownSvg,
  RecieveSendUpSvg2,
  SendUpSvg,
} from '../../../svgs/BtcDetailSvg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {Card} from 'react-native-shadow-cards';
import Footer from '../../../components/reusable/Footer/Footer';
import LinearGradient from 'react-native-linear-gradient';

export default function BitCoin({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View
        style={{
          flex: 0.9,
          backgroundColor: '#FFFFFF',
          marginBottom: 8,
        }}>
        <Text style={{fontFamily: 'Poppins-Medium', marginLeft: wp('5%')}}>
          Total Balance
        </Text>
        <Text
          style={{
            fontSize: 34,
            color: '#0B7F42',
            fontFamily: 'Poppins-Bold',
            marginLeft: wp('5%'),
          }}>
          0.7544 BTC
        </Text>
        <Text style={{fontFamily: 'Poppins-Medium', marginLeft: wp('5%')}}>
          $26,648.60
        </Text>
      </View>
      <SafeAreaView
        style={{
          flex: 4,
        }}>
        <ScrollView style={styles.scrollView}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Card style={styles.CardView}>
              <View>
                <SendUpSvg width={50} height={50} />
              </View>
              <View
                style={{
                  flex: 3,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#0A7C40',
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 16,
                    marginLeft: 7,
                  }}>
                  Sent Bitcoin
                </Text>
                <Text>0.7 BTC</Text>
              </View>

              <View
                style={{
                  flex: 1.5,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'red', fontFamily: 'Poppins-Bold'}}>
                  -0.75 BTC
                </Text>
                <Text style={{fontFamily: 'Poppins-Light'}}>13 June 2021</Text>
              </View>
            </Card>

            <Card style={styles.CardView}>
              <View>
                <RecieveDownSvg width={50} height={50} />
              </View>

              <View
                style={{
                  flex: 3,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#0A7C40',
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 16,
                    marginLeft: 7,
                  }}>
                  Recieve Bitcoin
                </Text>
                <Text style={{marginLeft: 15}}>0.7 BTC</Text>
              </View>

              <View
                style={{
                  flex: 1.5,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#00C106', fontFamily: 'Poppins-Medium'}}>
                  -0.75 BTC
                </Text>
                <Text style={{color: 'black', fontFamily: 'Poppins-Light'}}>
                  13 June 2021
                </Text>
              </View>
            </Card>
            <Card style={styles.CardView}>
              <View>
                <SendUpSvg width={50} height={50} />
              </View>
              <View
                style={{
                  flex: 3,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#0A7C40',
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginLeft: 7,
                  }}>
                  Sent Bitcoin
                </Text>
                <Text style={{color: '#202020', marginLeft: 15}}>0.7 BTC</Text>
              </View>

              <View
                style={{
                  flex: 1.5,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'red', fontWeight: 'bold'}}>
                  -0.75 BTC
                </Text>
                <Text style={{color: 'black', fontWeight: 'normal'}}>
                  13 June 2021
                </Text>
              </View>
            </Card>
            <Card style={styles.CardView}>
              <View>
                <RecieveDownSvg width={50} height={50} />
              </View>

              <View
                style={{
                  flex: 3,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#0A7C40',
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginLeft: 7,
                  }}>
                  Recieve Bitcoin
                </Text>
                <Text style={{color: '#202020', marginLeft: 15}}>0.7 BTC</Text>
              </View>

              <View
                style={{
                  flex: 1.5,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#00C106', fontWeight: 'bold'}}>
                  -0.75 BTC
                </Text>
                <Text style={{color: 'black', fontWeight: 'normal'}}>
                  13 June 2021
                </Text>
              </View>
            </Card>
            <Card style={styles.CardView}>
              <View>
                <RecieveDownSvg width={50} height={50} />
              </View>

              <View
                style={{
                  flex: 3,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#0A7C40',
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginLeft: 7,
                  }}>
                  Recieve Bitcoin
                </Text>
                <Text style={{color: '#202020', marginLeft: 15}}>0.7 BTC</Text>
              </View>

              <View
                style={{
                  flex: 1.5,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#00C106', fontWeight: 'bold'}}>
                  -0.75 BTC
                </Text>
                <Text style={{color: 'black', fontWeight: 'normal'}}>
                  13 June 2021
                </Text>
              </View>
            </Card>
            <Card style={styles.CardView}>
              <View>
                <SendUpSvg width={50} height={50} />
              </View>
              <View
                style={{
                  flex: 3,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#0A7C40',
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 16,
                    marginLeft: 7,
                  }}>
                  Sent Bitcoin
                </Text>
                <Text>0.7 BTC</Text>
              </View>

              <View
                style={{
                  flex: 1.5,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'red', fontFamily: 'Poppins-Bold'}}>
                  -0.75 BTC
                </Text>
                <Text style={{fontFamily: 'Poppins-Light'}}>13 June 2021</Text>
              </View>
            </Card>
            <Card style={styles.CardView}>
              <View>
                <RecieveDownSvg width={50} height={50} />
              </View>

              <View
                style={{
                  flex: 3,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#0A7C40',
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginLeft: 7,
                  }}>
                  Recieve Bitcoin
                </Text>
                <Text style={{color: '#202020', marginLeft: 15}}>0.7 BTC</Text>
              </View>

              <View
                style={{
                  flex: 1.5,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#00C106', fontWeight: 'bold'}}>
                  -0.75 BTC
                </Text>
                <Text style={{color: 'black', fontWeight: 'normal'}}>
                  13 June 2021
                </Text>
              </View>
            </Card>
            <Card style={styles.CardView}>
              <View>
                <RecieveDownSvg width={50} height={50} />
              </View>

              <View
                style={{
                  flex: 3,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#0A7C40',
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginLeft: 7,
                  }}>
                  Recieve Bitcoin
                </Text>
                <Text style={{color: '#202020', marginLeft: 15}}>0.7 BTC</Text>
              </View>

              <View
                style={{
                  flex: 1.5,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#00C106', fontWeight: 'bold'}}>
                  -0.75 BTC
                </Text>
                <Text style={{color: 'black', fontWeight: 'normal'}}>
                  13 June 2021
                </Text>
              </View>
            </Card>
            <Card style={styles.CardView}>
              <View>
                <SendUpSvg width={50} height={50} />
              </View>
              <View
                style={{
                  flex: 3,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#0A7C40',
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 16,
                    marginLeft: 7,
                  }}>
                  Sent Bitcoin
                </Text>
                <Text>0.7 BTC</Text>
              </View>

              <View
                style={{
                  flex: 1.5,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'red', fontFamily: 'Poppins-Bold'}}>
                  -0.75 BTC
                </Text>
                <Text style={{fontFamily: 'Poppins-Light'}}>13 June 2021</Text>
              </View>
            </Card>
            <Card style={styles.CardView}>
              <View>
                <RecieveDownSvg width={50} height={50} />
              </View>

              <View
                style={{
                  flex: 3,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#0A7C40',
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 16,
                    marginLeft: 7,
                  }}>
                  Recieve Bitcoin
                </Text>
                <Text style={{marginLeft: 15}}>0.7 BTC</Text>
              </View>

              <View
                style={{
                  flex: 1.5,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#00C106', fontFamily: 'Poppins-Medium'}}>
                  -0.75 BTC
                </Text>
                <Text style={{color: 'black', fontFamily: 'Poppins-Light'}}>
                  13 June 2021
                </Text>
              </View>
            </Card>
            <Card style={styles.CardView}>
              <View>
                <SendUpSvg width={50} height={50} />
              </View>
              <View
                style={{
                  flex: 3,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#0A7C40',
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 16,
                    marginLeft: 7,
                  }}>
                  Sent Bitcoin
                </Text>
                <Text>0.7 BTC</Text>
              </View>

              <View
                style={{
                  flex: 1.5,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'red', fontFamily: 'Poppins-Bold'}}>
                  -0.75 BTC
                </Text>
                <Text style={{fontFamily: 'Poppins-Light'}}>13 June 2021</Text>
              </View>
            </Card>
            <Card style={styles.CardView}>
              <View>
                <RecieveDownSvg width={50} height={50} />
              </View>

              <View
                style={{
                  flex: 3,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#0A7C40',
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginLeft: 7,
                  }}>
                  Recieve Bitcoin
                </Text>
                <Text style={{color: '#202020', marginLeft: 15}}>0.7 BTC</Text>
              </View>

              <View
                style={{
                  flex: 1.5,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#00C106', fontWeight: 'bold'}}>
                  -0.75 BTC
                </Text>
                <Text style={{color: 'black', fontWeight: 'normal'}}>
                  13 June 2021
                </Text>
              </View>
            </Card>
            <Card style={styles.CardView}>
              <View>
                <SendUpSvg width={50} height={50} />
              </View>
              <View
                style={{
                  flex: 3,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#0A7C40',
                    fontFamily: 'Poppins-SemiBold',
                    fontSize: 16,
                    marginLeft: 7,
                  }}>
                  Sent Bitcoin
                </Text>
                <Text>0.7 BTC</Text>
              </View>

              <View
                style={{
                  flex: 1.5,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'red', fontFamily: 'Poppins-Bold'}}>
                  -0.75 BTC
                </Text>
                <Text style={{fontFamily: 'Poppins-Light'}}>13 June 2021</Text>
              </View>
            </Card>
            <Card style={styles.CardView}>
              <View>
                <RecieveDownSvg width={50} height={50} />
              </View>

              <View
                style={{
                  flex: 3,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#0A7C40',
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginLeft: 7,
                  }}>
                  Recieve Bitcoin
                </Text>
                <Text style={{color: '#202020', marginLeft: 15}}>0.7 BTC</Text>
              </View>

              <View
                style={{
                  flex: 1.5,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#00C106', fontWeight: 'bold'}}>
                  -0.75 BTC
                </Text>
                <Text style={{color: 'black', fontWeight: 'normal'}}>
                  13 June 2021
                </Text>
              </View>
            </Card>
            <Card style={styles.CardView}>
              <View>
                <RecieveDownSvg width={50} height={50} />
              </View>

              <View
                style={{
                  flex: 3,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#0A7C40',
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginLeft: 7,
                  }}>
                  Recieve Bitcoin
                </Text>
                <Text style={{color: '#202020', marginLeft: 15}}>0.7 BTC</Text>
              </View>

              <View
                style={{
                  flex: 1.5,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#00C106', fontWeight: 'bold'}}>
                  -0.75 BTC
                </Text>
                <Text style={{color: 'black', fontWeight: 'normal'}}>
                  13 June 2021
                </Text>
              </View>
            </Card>
            <Card style={styles.CardView}>
              <View>
                <RecieveDownSvg width={50} height={50} />
              </View>

              <View
                style={{
                  flex: 3,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#0A7C40',
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginLeft: 7,
                  }}>
                  Recieve Bitcoin
                </Text>
                <Text style={{color: '#202020', marginLeft: 15}}>0.7 BTC</Text>
              </View>

              <View
                style={{
                  flex: 1.5,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#00C106', fontWeight: 'bold'}}>
                  -0.75 BTC
                </Text>
                <Text style={{color: 'black', fontWeight: 'normal'}}>
                  13 June 2021
                </Text>
              </View>
            </Card>
            <Card style={styles.CardView}>
              <View>
                <RecieveDownSvg width={50} height={50} />
              </View>

              <View
                style={{
                  flex: 3,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: '#0A7C40',
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginLeft: 7,
                  }}>
                  Recieve Bitcoin
                </Text>
                <Text style={{color: '#202020', marginLeft: 15}}>0.7 BTC</Text>
              </View>

              <View
                style={{
                  flex: 1.5,
                  alignContent: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#00C106', fontWeight: 'bold'}}>
                  -0.75 BTC
                </Text>
                <Text style={{color: 'black', fontWeight: 'normal'}}>
                  13 June 2021
                </Text>
              </View>
            </Card>
          </View>
        </ScrollView>
      </SafeAreaView>
      {/* ..............Button ..............*/}
      <View
        style={{
          flex: 0.6,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          // marginBottom: '25%',
          // backgroundColor: 'red',
        }}>
        <Card
          style={{
            width: heightPercentageToDP(17),
            // height: 65,
            borderRadius: 12,
            // backgroundColor: 'white',
            flexDirection: 'row',
            padding: 12,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('sendEth')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              // backgroundColor:"red",
              // width:"100%"
            }}>
            <ButtonSendUpSvg2 width={39} height={39} />
            <Text
              style={{
                fontFamily: 'Poppins-Medium',
                fontSize: 18,
                marginLeft: 10,
              }}>
              Send
            </Text>
          </TouchableOpacity>
        </Card>

        <Card
          style={{
            width: heightPercentageToDP(17),
            // height: 65,
            borderRadius: 12,
            // backgroundColor: 'red',
            marginLeft: 7,
            flexDirection: 'row',
            // alignContent: 'center',
            // alignItems: 'center',
          }}>
          <LinearGradient
            colors={['#0B7F42', '#064021']}
            style={{
              padding: 12,
              borderRadius: 12,
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate('recieveEth')}>
              <RecieveSendUpSvg2 width={39} height={39} />
              <Text
                style={{
                  fontFamily: 'Poppins-Medium',
                  fontSize: 18,
                  marginLeft: 10,
                  color: '#FFFFFF',
                }}>
                Recieve
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </Card>
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
  CardView: {
    width: heightPercentageToDP(40),
    // flex: 1,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
    // height: '22%',
    flexDirection: 'row',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    elevation: 3,
    // justifyContent: 'center',
  },
});
