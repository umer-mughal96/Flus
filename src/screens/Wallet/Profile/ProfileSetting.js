import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  SafeAreaView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/Ionicons';
import {wp, hp} from '../../../components/reusable/Dimension/Dimen';
import {
  AccountSvg,
  AppSettingSvg,
  BtcCircleSvg,
  EthCircleSvg,
  HelpAndSupSvg,
  LogOutSvg,
  ReportBugSvg,
  RerferralSvg,
  SecuritySvg,
} from '../../../svgs/ProfileSvgs';
import Footer from '../../../components/reusable/Footer/Footer';

export default function ProfileSetting({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text
          style={{
            fontSize: 29,
            color: '#111B4F',
            fontFamily: 'Poppins-Bold',
          }}>
          Private Key
        </Text>
        <Text style={{fontFamily: 'Poppins-Regular'}}>Tap any to show key</Text>
      </View>

      <View style={Platform.OS === 'ios' ? styles.IosView2 : styles.AndrView2}>
        <Card
          style={
            Platform.OS === 'ios' ? styles.TokenCoinIos : styles.TokenCoinAndr
          }>
          <TouchableOpacity
            onPress={() => navigation.navigate('BTCConfirmPass')}>
            <BtcCircleSvg />

            <Text
              style={{
                paddingTop: 10,
                fontFamily: 'Poppins-Medium',
                fontSize: 17,
                marginLeft: 5,
              }}>
              BTC
            </Text>
          </TouchableOpacity>
        </Card>

        <Card
          style={
            Platform.OS === 'ios' ? styles.TokenCoinIos : styles.TokenCoinAndr
          }>
          <TouchableOpacity
            onPress={() => navigation.navigate('EthConfirmPass')}>
            <EthCircleSvg />

            <Text
              style={{
                paddingTop: 10,
                fontFamily: 'Poppins-Medium',
                fontSize: 17,
                marginLeft: 5,
              }}>
              ETH
            </Text>
          </TouchableOpacity>
        </Card>
      </View>

      <SafeAreaView
        style={Platform.OS === 'ios' ? styles.IosView3 : styles.AndrView3}>
        <ScrollView
          style={{
            width: wp(330),
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',

              marginBottom: '5%',
            }}>
            <Card
              cornerRadius={14}
              style={Platform.OS === 'ios' ? styles.card : styles.Andrcard}>
              <TouchableOpacity
                onPress={() => navigation.navigate('UserDetails')}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AccountSvg />
                <View style={styles.TextView}>
                  <Text style={styles.svgText}>Account Details</Text>
                  <Text style={styles.svgText12}>Phone & email</Text>
                </View>

                <Icon
                  name="chevron-forward-sharp"
                  color="#000000"
                  size={18}
                  style={{marginLeft: '30%'}}
                />
              </TouchableOpacity>
            </Card>
            <Card
              cornerRadius={14}
              style={Platform.OS === 'ios' ? styles.card : styles.Andrcard}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Security')}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <SecuritySvg />
                <View style={styles.TextView}>
                  <Text style={styles.svgText}>Security</Text>
                  <Text style={styles.svgText12}>
                    Daily limit, Passcode, Fingerprint/FaceID
                  </Text>
                </View>

                <Icon
                  name="chevron-forward-sharp"
                  color="#000000"
                  size={18}
                  style={{marginLeft: '8%'}}
                />
              </TouchableOpacity>
            </Card>

            <Card
              cornerRadius={14}
              style={Platform.OS === 'ios' ? styles.card : styles.Andrcard}>
              <TouchableOpacity
                onPress={() => navigation.navigate('AppSetting')}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AppSettingSvg />
                <View style={styles.TextView}>
                  <Text style={styles.svgText}>App Settings</Text>
                  <Text style={styles.svgText12}>
                    Tokens, currency, notifications
                  </Text>
                </View>

                <Icon
                  name="chevron-forward-sharp"
                  color="#000000"
                  size={18}
                  style={{marginLeft: '25%'}}
                />
              </TouchableOpacity>
            </Card>
            <Card
              cornerRadius={14}
              style={Platform.OS === 'ios' ? styles.card : styles.Andrcard}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Referral')}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <RerferralSvg />
                <View style={styles.TextView}>
                  <Text style={styles.svgText}>Referrals Earnings</Text>
                  <Text style={styles.svgText12}>
                    you all referral earnings
                  </Text>
                </View>

                <Icon
                  name="chevron-forward-sharp"
                  color="#000000"
                  size={18}
                  style={{marginLeft: '23.5%'}}
                />
              </TouchableOpacity>
            </Card>

            <Card
              cornerRadius={14}
              style={Platform.OS === 'ios' ? styles.card : styles.Andrcard1}>
              <TouchableOpacity
                onPress={() => navigation.navigate('HelpSupport')}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <HelpAndSupSvg />
                <View style={styles.TextView}>
                  <Text style={styles.svgText}>Help & Support</Text>
                </View>

                <Icon
                  name="chevron-forward-sharp"
                  color="#000000"
                  size={18}
                  style={{marginLeft: '32%'}}
                />
              </TouchableOpacity>
            </Card>
            <Card
              cornerRadius={14}
              style={Platform.OS === 'ios' ? styles.card : styles.Andrcard1}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ReportBug')} //ReportBug
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ReportBugSvg />
                <View style={styles.TextView}>
                  <Text style={styles.svgText}>Report a Bug</Text>
                </View>

                <Icon
                  name="chevron-forward-sharp"
                  color="#000000"
                  size={18}
                  style={{marginLeft: '38%'}}
                />
              </TouchableOpacity>
            </Card>
            <Card
              cornerRadius={14}
              style={Platform.OS === 'ios' ? styles.card : styles.Andrcard1}>
              <TouchableOpacity
                onPress={() => navigation.navigate('signin')}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <LogOutSvg />
                <View style={styles.TextView}>
                  <Text style={styles.svgText}>Log Out</Text>
                </View>

                <Icon
                  name="chevron-forward-sharp"
                  color="#000000"
                  size={18}
                  style={{marginLeft: '54%'}}
                />
              </TouchableOpacity>
            </Card>
          </View>
        </ScrollView>
      </SafeAreaView>

      <View
        style={
          Platform.OS === 'ios' ? styles.IosBottomView : styles.AndrBottomView
        }>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  view1: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  IosView3: {
    flex: 1.3,
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(360),
    marginBottom: '5%',
  },
  AndrView3: {
    flex: 1.3,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  IosView2: {
    flex: 0.4,
    flexDirection: 'row',
    marginTop: hp(5),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: wp(360),
  },
  AndrView2: {
    flex: 0.5,
    flexDirection: 'row',
    marginTop: hp(5),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: wp(360),
  },
  card: {
    flex: 2,
    padding: 7,
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    elevation: 0.5,
    width: '98%',
  },
  Andrcard: {
    padding: 3.5,
    flexDirection: 'row',
    marginTop: 4.5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.8,
  },
  Andrcard1: {
    padding: 4.8,
    flexDirection: 'row',
    marginTop: 4.5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.8,
  },
  svgText12: {
    fontFamily: 'Poppins-Light',
    fontSize: 12,
  },
  svgText: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
  TextView: {
    marginLeft: 10,
  },
  TokenCoinIos: {
    flex: 0.28,
    justifyContent: 'center',
    alignItems: 'center',
    // width: wp(100),
    height: hp(105),
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    elevation: 3,
  },
  TokenCoinAndr: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(100),
    height: hp(115),
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    elevation: 5,
  },
  IosBottomView: {
    flex: 1,
    maxHeight: hp(100),
  },
  AndrBottomView: {
    flex: 1,
    maxHeight: hp(130),
  },
});
