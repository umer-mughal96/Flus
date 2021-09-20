import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../../../../../config/colors';
import {wp, hp} from '../../../../../../components/reusable/Dimension/Dimen';
import {UpSvg} from '../../../../../../svgs/WalletHomeSvgs';

export default function Token({navigation}) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={style.Container}>
        <View style={style.view1}>
          <Text
            style={{
              color: colors.main,
              fontSize: 28,
              fontFamily: 'Poppins-Medium',
            }}>
            Tokens
          </Text>
        </View>

        <View style={style.view2}>
          <Card
            cornerRadius={12}
            style={{
              // paddingLeft: 10,
              alignItems: 'center',
              flexDirection: 'row',
              width: wp(300),
              height: hp(45),
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 0.2,
              elevation: 2,
            }}>
            <Icon
              name="search1"
              color="#111B4F"
              size={20}
              style={{marginLeft: '5%'}}
            />
            <TextInput
              style={{
                fontFamily: 'poppins-light',
                fontSize: 16,
                marginLeft: 10,
              }}
              placeholder="Search"
            />
          </Card>
        </View>

        <View style={style.view3}>
          <Text
            style={{
              alignSelf: 'flex-end',
              fontFamily: 'Poppins-SemiBold',
              fontSize: 14,
            }}>
            Price
          </Text>
          <Text
            style={{
              alignSelf: 'flex-end',
              marginLeft: 45,
              fontFamily: 'Poppins-SemiBold',
              fontSize: 14,
            }}>
            24h
          </Text>
        </View>
        <SafeAreaView style={style.view4}>
          <ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('Capture')}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp(330),
                  }}>
                  <View
                    style={{
                      flex: 0.58,
                    }}>
                    <View
                      style={{
                        alignContent: 'center',
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                      }}>
                      <UpSvg />

                      <Text
                        style={{
                          fontFamily: 'Poppins-Medium',
                          alignContent: 'center',
                          textAlign: 'center',
                          marginLeft: '5%',
                          fontSize: 18,
                        }}>
                        0xBTC
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.4,

                      flexDirection: 'row',
                      marginLeft: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                    <Text
                      style={{
                        marginLeft: 45,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp(330),
                  }}>
                  <View
                    style={{
                      flex: 0.58,
                    }}>
                    <View
                      style={{
                        alignContent: 'center',
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                      }}>
                      <UpSvg />

                      <Text
                        style={{
                          fontFamily: 'Poppins-Medium',
                          alignContent: 'center',
                          textAlign: 'center',
                          marginLeft: '5%',
                          fontSize: 18,
                        }}>
                        0xBTC
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.4,

                      flexDirection: 'row',
                      marginLeft: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                    <Text
                      style={{
                        marginLeft: 45,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp(330),
                  }}>
                  <View
                    style={{
                      flex: 0.58,
                    }}>
                    <View
                      style={{
                        alignContent: 'center',
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                      }}>
                      <UpSvg />

                      <Text
                        style={{
                          fontFamily: 'Poppins-Medium',
                          alignContent: 'center',
                          textAlign: 'center',
                          marginLeft: '5%',
                          fontSize: 18,
                        }}>
                        0xBTC
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.4,

                      flexDirection: 'row',
                      marginLeft: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                    <Text
                      style={{
                        marginLeft: 45,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp(330),
                  }}>
                  <View
                    style={{
                      flex: 0.58,
                    }}>
                    <View
                      style={{
                        alignContent: 'center',
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                      }}>
                      <UpSvg />

                      <Text
                        style={{
                          fontFamily: 'Poppins-Medium',
                          alignContent: 'center',
                          textAlign: 'center',
                          marginLeft: '5%',
                          fontSize: 18,
                        }}>
                        0xBTC
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.4,

                      flexDirection: 'row',
                      marginLeft: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                    <Text
                      style={{
                        marginLeft: 45,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp(330),
                  }}>
                  <View
                    style={{
                      flex: 0.58,
                    }}>
                    <View
                      style={{
                        alignContent: 'center',
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                      }}>
                      <UpSvg />

                      <Text
                        style={{
                          fontFamily: 'Poppins-Medium',
                          alignContent: 'center',
                          textAlign: 'center',
                          marginLeft: '5%',
                          fontSize: 18,
                        }}>
                        0xBTC
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.4,

                      flexDirection: 'row',
                      marginLeft: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                    <Text
                      style={{
                        marginLeft: 45,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp(330),
                  }}>
                  <View
                    style={{
                      flex: 0.58,
                    }}>
                    <View
                      style={{
                        alignContent: 'center',
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                      }}>
                      <UpSvg />

                      <Text
                        style={{
                          fontFamily: 'Poppins-Medium',
                          alignContent: 'center',
                          textAlign: 'center',
                          marginLeft: '5%',
                          fontSize: 18,
                        }}>
                        0xBTC
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.4,

                      flexDirection: 'row',
                      marginLeft: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                    <Text
                      style={{
                        marginLeft: 45,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp(330),
                  }}>
                  <View
                    style={{
                      flex: 0.58,
                    }}>
                    <View
                      style={{
                        alignContent: 'center',
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                      }}>
                      <UpSvg />

                      <Text
                        style={{
                          fontFamily: 'Poppins-Medium',
                          alignContent: 'center',
                          textAlign: 'center',
                          marginLeft: '5%',
                          fontSize: 18,
                        }}>
                        0xBTC
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.4,

                      flexDirection: 'row',
                      marginLeft: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                    <Text
                      style={{
                        marginLeft: 45,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp(330),
                  }}>
                  <View
                    style={{
                      flex: 0.58,
                    }}>
                    <View
                      style={{
                        alignContent: 'center',
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                      }}>
                      <UpSvg />

                      <Text
                        style={{
                          fontFamily: 'Poppins-Medium',
                          alignContent: 'center',
                          textAlign: 'center',
                          marginLeft: '5%',
                          fontSize: 18,
                        }}>
                        0xBTC
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.4,

                      flexDirection: 'row',
                      marginLeft: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                    <Text
                      style={{
                        marginLeft: 45,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp(330),
                  }}>
                  <View
                    style={{
                      flex: 0.58,
                    }}>
                    <View
                      style={{
                        alignContent: 'center',
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                      }}>
                      <UpSvg />

                      <Text
                        style={{
                          fontFamily: 'Poppins-Medium',
                          alignContent: 'center',
                          textAlign: 'center',
                          marginLeft: '5%',
                          fontSize: 18,
                        }}>
                        0xBTC
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.4,

                      flexDirection: 'row',
                      marginLeft: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                    <Text
                      style={{
                        marginLeft: 45,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp(330),
                  }}>
                  <View
                    style={{
                      flex: 0.58,
                    }}>
                    <View
                      style={{
                        alignContent: 'center',
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                      }}>
                      <UpSvg />

                      <Text
                        style={{
                          fontFamily: 'Poppins-Medium',
                          alignContent: 'center',
                          textAlign: 'center',
                          marginLeft: '5%',
                          fontSize: 18,
                        }}>
                        0xBTC
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.4,

                      flexDirection: 'row',
                      marginLeft: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                    <Text
                      style={{
                        marginLeft: 45,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp(330),
                  }}>
                  <View
                    style={{
                      flex: 0.58,
                    }}>
                    <View
                      style={{
                        alignContent: 'center',
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                      }}>
                      <UpSvg />

                      <Text
                        style={{
                          fontFamily: 'Poppins-Medium',
                          alignContent: 'center',
                          textAlign: 'center',
                          marginLeft: '5%',
                          fontSize: 18,
                        }}>
                        0xBTC
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.4,

                      flexDirection: 'row',
                      marginLeft: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                    <Text
                      style={{
                        marginLeft: 45,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp(330),
                  }}>
                  <View
                    style={{
                      flex: 0.58,
                    }}>
                    <View
                      style={{
                        alignContent: 'center',
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                      }}>
                      <UpSvg />

                      <Text
                        style={{
                          fontFamily: 'Poppins-Medium',
                          alignContent: 'center',
                          textAlign: 'center',
                          marginLeft: '5%',
                          fontSize: 18,
                        }}>
                        0xBTC
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.4,

                      flexDirection: 'row',
                      marginLeft: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                    <Text
                      style={{
                        marginLeft: 45,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp(330),
                  }}>
                  <View
                    style={{
                      flex: 0.58,
                    }}>
                    <View
                      style={{
                        alignContent: 'center',
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                      }}>
                      <UpSvg />

                      <Text
                        style={{
                          fontFamily: 'Poppins-Medium',
                          alignContent: 'center',
                          textAlign: 'center',
                          marginLeft: '5%',
                          fontSize: 18,
                        }}>
                        0xBTC
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.4,

                      flexDirection: 'row',
                      marginLeft: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                    <Text
                      style={{
                        marginLeft: 45,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp(330),
                  }}>
                  <View
                    style={{
                      flex: 0.58,
                    }}>
                    <View
                      style={{
                        alignContent: 'center',
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                      }}>
                      <UpSvg />

                      <Text
                        style={{
                          fontFamily: 'Poppins-Medium',
                          alignContent: 'center',
                          textAlign: 'center',
                          marginLeft: '5%',
                          fontSize: 18,
                        }}>
                        0xBTC
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.4,

                      flexDirection: 'row',
                      marginLeft: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                    <Text
                      style={{
                        marginLeft: 45,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp(330),
                  }}>
                  <View
                    style={{
                      flex: 0.58,
                    }}>
                    <View
                      style={{
                        alignContent: 'center',
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                      }}>
                      <UpSvg />

                      <Text
                        style={{
                          fontFamily: 'Poppins-Medium',
                          alignContent: 'center',
                          textAlign: 'center',
                          marginLeft: '5%',
                          fontSize: 18,
                        }}>
                        0xBTC
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.4,

                      flexDirection: 'row',
                      marginLeft: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                    <Text
                      style={{
                        marginLeft: 45,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp(330),
                  }}>
                  <View
                    style={{
                      flex: 0.58,
                    }}>
                    <View
                      style={{
                        alignContent: 'center',
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                      }}>
                      <UpSvg />

                      <Text
                        style={{
                          fontFamily: 'Poppins-Medium',
                          alignContent: 'center',
                          textAlign: 'center',
                          marginLeft: '5%',
                          fontSize: 18,
                        }}>
                        0xBTC
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.4,

                      flexDirection: 'row',
                      marginLeft: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                    <Text
                      style={{
                        marginLeft: 45,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp(330),
                  }}>
                  <View
                    style={{
                      flex: 0.58,
                    }}>
                    <View
                      style={{
                        alignContent: 'center',
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                      }}>
                      <UpSvg />

                      <Text
                        style={{
                          fontFamily: 'Poppins-Medium',
                          alignContent: 'center',
                          textAlign: 'center',
                          marginLeft: '5%',
                          fontSize: 18,
                        }}>
                        0xBTC
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.4,

                      flexDirection: 'row',
                      marginLeft: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                    <Text
                      style={{
                        marginLeft: 45,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp(330),
                  }}>
                  <View
                    style={{
                      flex: 0.58,
                    }}>
                    <View
                      style={{
                        alignContent: 'center',
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                      }}>
                      <UpSvg />

                      <Text
                        style={{
                          fontFamily: 'Poppins-Medium',
                          alignContent: 'center',
                          textAlign: 'center',
                          marginLeft: '5%',
                          fontSize: 18,
                        }}>
                        0xBTC
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.4,

                      flexDirection: 'row',
                      marginLeft: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                    <Text
                      style={{
                        marginLeft: 45,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    width: wp(330),
                  }}>
                  <View
                    style={{
                      flex: 0.58,
                    }}>
                    <View
                      style={{
                        alignContent: 'center',
                        flexDirection: 'row',
                        alignContent: 'center',
                        alignItems: 'center',
                      }}>
                      <UpSvg />

                      <Text
                        style={{
                          fontFamily: 'Poppins-Medium',
                          alignContent: 'center',
                          textAlign: 'center',
                          marginLeft: '5%',
                          fontSize: 18,
                        }}>
                        0xBTC
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 0.4,

                      flexDirection: 'row',
                      marginLeft: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                    <Text
                      style={{
                        marginLeft: 45,
                        fontFamily: 'Poppins-Medium',
                      }}>
                      $0.31
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
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
    marginLeft: '10%',
  },
  view2: {
    flex: 0.1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view3: {
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    flexDirection: 'row',
    paddingRight: 25,
    marginTop: '5%',
  },
  view4: {
    flex: 0.9,
    paddingTop: 4,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
