import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../screens/Landing';
import Signup from '../screens/Signup/Signup';
import CreatePasscode from '../screens/Signup/CreatePasscode';
import ConfirmPasscode from '../screens/Signup/ConfirmPasscode';
import CreateEmail from '../screens/Signup/CreateEmail';
import ConfirmEmail from '../screens/Signup/ConfirmEmail';
import EmailVerifyToken from '../screens/Signup/EmailVerifyToken';
import CreateMobile from '../screens/Signup/CreateMobile';
import ConfirmMobile from '../screens/Signup/ConfirmMobile';
import MobileVerifyToken from '../screens/Signup/MobileVerifyToken';
import WalletHome from '../screens/Wallet/WalletHome';
import ReferralScreen from '../screens/ReferralScreen';
import RestoreScreen from '../screens/Signup/RestoreScreen';
import RecoveryRestore from '../screens/Signup/RecoveryRestore';
import ProceedScreen from '../screens/Signup/ProceedScreen';
import CustodianInfo from '../screens/Wallet/Profile/Security/AddCustodian/CustodianInfo';
import EtheriumDetail from '../screens/Wallet/Ethenium/EheriumDetail';
import RecieveEth from '../screens/Wallet/Ethenium/RecieveEth';
// import SendEth from '../screens/Wallet/Ethenium/SendEth';
import RecoverySeedSinUp from '../screens/Signup/RecoverySeedSinUp';
import WalletSats from '../screens/Wallet/YearnCash/WalletStats';
import CustodianConfirmation from '../screens/Wallet/Profile/Security/AddCustodian/CustodianConfirmation';
import TransactionSuccess from '../screens/Wallet/Ethenium/TransactionSuccess';
import TransactionConfirmPass from '../screens/Wallet/Ethenium/TransactionConfirmPass';
import Sendbtc from '../screens/Wallet/BitCoin/Sendbtc';
import RecieveBtc from '../screens/Wallet/BitCoin/RecieveBtc';
import RecoverySeed from '../screens/Wallet/Profile/Security/ChangeRecoverySeed/RecoverySeed';
import AppSetting from '../screens/Wallet/Profile/AppSetting/AppSetting';
import Security from '../screens/Wallet/Profile/Security/Security';
import Currency from '../screens/Wallet/Profile/AppSetting/Currency/Currency';
import Referral from '../screens/Wallet/Profile/RefferalEarnings/Referral';
import ETHPrivateKey from '../screens/Wallet/Profile/ETHPrivateKey/ETHPrivatekey';
import Exchange from '../screens/Wallet/Exchange/Exchange';
import Exhange_Verify from '../screens/Wallet/Exchange/Exchage_Verify';
import Exhange_Done from '../screens/Wallet/Exchange/Exchange_Done';
import UserDetails from '../screens/Wallet/Profile/AccountDetails/UserDetails';
import ConfirmUserDetails from '../screens/Wallet/Profile/AccountDetails/ConfirmUserDetails';
import Notifications from '../screens/Wallet/Activity/Notifications';
import SecurityChangePass from '../screens/Wallet/Profile/Security/ChangePasscode/SecurityChangePass';
import SecurityConfirmPass from '../screens/Wallet/Profile/Security/ChangePasscode/SecurityConfirmPass';
import BitCoin from '../screens/Wallet/BitCoin/BitCoin';
import Contacts from '../screens/Wallet/Contacts/Contacts';
import ProfileSetting from '../screens/Wallet/Profile/ProfileSetting';
import TopUP from '../screens/TopUp/TopUP';
import GiftCardInfo from '../screens/TopUp/GiftCardInfo';
import PlasmaTopUp8 from '../screens/TopUp/PlasaTopUp8';
import Gallery from '../screens/TopUp/Gallery';
import BTCPrivateKey from '../screens/Wallet/Profile/BTCPrivateKey/BTCPrivateKey';
import UserCofirmPass from '../screens/Wallet/Profile/AccountDetails/UserCofirmPass';
import RecoveryCofirmPass from '../screens/Wallet/Profile/Security/ChangeRecoverySeed/RecoveryCofirmPass';
import Dex from '../screens/Wallet/Dex/Dex';
import BTCConfirmPass from '../screens/Wallet/Profile/BTCPrivateKey/BTCConfirmPass';
import BtcDiscalaimer from '../screens/Wallet/Profile/BTCPrivateKey/BtcDisclaimer';
import EthDiscalaimer from '../screens/Wallet/Profile/ETHPrivateKey/EthDisclaimer';
import EthConfirmPass from '../screens/Wallet/Profile/ETHPrivateKey/EthConfirmPass';
import Signin from '../screens/Signin/Signin';
import ChoseRecoverySeed from '../screens/Signin/RestoreAccount/ChoseRecoverySeed';
import SigninRecoverySeed from '../screens/Signin/RestoreAccount/SigninRecoverySeed';
import CreateNewPass from '../screens/Signin/RestoreAccount/CreateNewPass';
import ConfirmNewPass from '../screens/Signin/RestoreAccount/ConfirmNewPass';
import Congratulation from '../screens/Signin/RestoreAccount/Congratulation';
import SendEth from '../screens/Wallet/SedEth/SendEth';
import Transfer from '../screens/Wallet/SedEth/Transfer/Transfer';
import Token from '../screens/Wallet/Dex/ExploreDeFi/Tokenexchange/Token exchange/Token';
import AfterTokenExchange from '../screens/Wallet/Dex/ExploreDeFi/Tokenexchange/Token exchange/AfterTokenExchange';
import BuyCryptocurrency from '../screens/TopUp/BuyCryptocurrency';
import Topup_Order from '../screens/TopUp/GiftCardTopUp';
import ReceiveCryptocurrency from '../screens/TopUp/ReceiveCryptocurrency';
import DexBuyKey from '../components/reusable/DexBuyKey/DexBuyKey';
import HelpSupport from '../screens/Wallet/Profile/HelpSupport/HelpSupport';
import ReportBug from '../screens/Wallet/Profile/ReportBug/ReportBug';

export default function Navigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="signin"
        component={Landing}
      />
      <Stack.Screen
        options={{headerShown: true, title: ''}}
        name="restoreScreen"
        component={RestoreScreen}
      />
      <Stack.Screen
        options={{headerShown: true, title: ''}}
        name="proceedScreen"
        component={ProceedScreen}
      />
      <Stack.Screen
        options={{headerShown: true, title: ''}}
        name="recoveryRestore"
        component={RecoveryRestore}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="referralScreen"
        component={ReferralScreen}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="Signup"
        component={Signup}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="Signin"
        component={Signin}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="createPasscode"
        component={CreatePasscode}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="confrimPasscode"
        component={ConfirmPasscode}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="createEmail"
        component={CreateEmail}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="confirmEmail"
        component={ConfirmEmail}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="verifyEmail"
        component={EmailVerifyToken}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="createMobile"
        component={CreateMobile}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="confirmMobile"
        component={ConfirmMobile}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="verifyMobile"
        component={MobileVerifyToken}
      />
      {/* <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="Capture"
        component={Capture}
      /> */}
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="recoverySeed"
        component={RecoverySeed}
      />
      <Stack.Screen
        options={{
          title: 'Wallet',
          headerLeft: null,
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerBackTitleVisible: false,
        }}
        name="walletHome"
        component={WalletHome}
      />
      <Stack.Screen
        options={{
          title: 'Dex',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="dex"
        component={Dex}
      />

      <Stack.Screen
        options={{
          title: 'Gift Card Topup',
          headerTintColor: 'black',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },

          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        tabBarOptions={{
          keyboardHidesTabBar: false,
        }}
        name="GiftCardInfo"
        component={GiftCardInfo}
      />

      <Stack.Screen
        options={{
          title: 'Exchange',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="exchange"
        component={Exchange}
      />

      <Stack.Screen
        options={{
          title: 'Exchange Verify',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="exchangeverify"
        component={Exhange_Verify}
      />
      <Stack.Screen
        options={{
          title: 'Exchange Done',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="exchangedone"
        component={Exhange_Done}
      />

      <Stack.Screen
        options={{
          title: 'Gift Card Topup',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="plasma8"
        component={PlasmaTopUp8}
      />
      <Stack.Screen
        options={{
          title: 'Topup',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="BuyCryptocurrency"
        component={BuyCryptocurrency}
      />
      <Stack.Screen
        options={{
          title: 'Topup',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="ReceiveCryptocurrency"
        component={ReceiveCryptocurrency}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="Contacts"
        component={Contacts}
      />
      <Stack.Screen
        options={{
          title: 'App settings',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="AppSetting"
        component={AppSetting}
      />

      <Stack.Screen
        options={{
          title: 'Account Details',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="UserDetails"
        component={UserDetails}
      />
      <Stack.Screen
        options={{
          title: 'Account Details',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="BitCoin"
        component={BitCoin}
      />
      <Stack.Screen
        options={{
          title: 'TopUP',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="Topup"
        component={TopUP}
      />
      <Stack.Screen
        options={{
          title: 'Account Details',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="ConfirmUserDetails"
        component={ConfirmUserDetails}
      />
      <Stack.Screen
        options={{
          title: 'Currency',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="Currency"
        component={Currency}
      />
      <Stack.Screen
        options={{
          title: 'Security',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="Security"
        component={Security}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',

            fontSize: 16,
          },
        }}
        name="CustodianInfo"
        component={CustodianInfo}
      />
      <Stack.Screen
        options={{
          title: '',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
            // shadowColor: '#000',
            // shadowOffset: {width: 0, height: 1},
            // shadowOpacity: 0.1,
            // elevation: 1,
          },
          headerTintColor: 'black',
          // headerTitleStyle: {
          //   justifyContent: 'center',
          //   alignItems: 'center',
          //   fontFamily: 'Poppins-Medium',

          //   fontSize: 16,
          // },
        }}
        name="Confirmation"
        component={CustodianConfirmation}
      />
      <Stack.Screen
        options={{
          title: 'Activity',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',

            fontSize: 18,
          },
        }}
        name="Notifications"
        component={Notifications}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="ProfileSetting"
        component={ProfileSetting}
      />

      <Stack.Screen
        options={{
          title: 'Activity',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="Sendbtc"
        component={Sendbtc}
      />
      <Stack.Screen
        options={{
          title: '',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="SecurityChangePass"
        component={SecurityChangePass}
      />
      <Stack.Screen
        options={{
          title: '',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="SecurityConfirmPass"
        component={SecurityConfirmPass}
      />
      {/* <Stack.Screen
        options={{
          title: 'Capture',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="capture"
        component={Capture}
      /> */}
      <Stack.Screen
        options={{
          title: 'Gallery',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="gallery"
        component={Gallery}
      />
      <Stack.Screen
        options={{
          title: ' ',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="Referral"
        component={Referral}
      />
      <Stack.Screen
        options={{
          title: '',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="recieveBtc"
        component={RecieveBtc}
      />
      <Stack.Screen
        options={{
          title: 'Ethereum',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="ethDetail"
        component={EtheriumDetail}
      />
      <Stack.Screen
        options={{
          title: 'Recieve',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="recieveEth"
        component={RecieveEth}
      />
      {/* <Stack.Screen
        options={{
          title: 'Send',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="sendEth"
        component={SendEth}
      /> */}
      <Stack.Screen
        options={{
          title: '',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="RecoverySeedSinUp"
        component={RecoverySeedSinUp}
      />
      <Stack.Screen
        options={{
          title: 'Send',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="BTCPrivateKey"
        component={BTCPrivateKey}
      />
      <Stack.Screen
        options={{
          title: 'Send',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="ETHPrivateKey"
        component={ETHPrivateKey}
      />
      <Stack.Screen
        options={{
          title: 'Send',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="WalletSats"
        component={WalletSats}
      />
      <Stack.Screen
        options={{
          title: 'Confirmation',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="TransactionConfromPass"
        component={TransactionConfirmPass}
      />
      <Stack.Screen
        options={{
          title: 'Confirmation',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="TransactionSuccess"
        component={TransactionSuccess}
      />
      <Stack.Screen
        options={{
          title: '',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="UserCofirmPass"
        component={UserCofirmPass}
      />

      <Stack.Screen
        options={{
          title: '',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="RecoveryCofirmPass"
        component={RecoveryCofirmPass}
      />
      <Stack.Screen
        options={{
          title: '',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="BTCConfirmPass"
        component={BTCConfirmPass}
      />
      <Stack.Screen
        options={{
          title: '',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="BtcDiscalaimer"
        component={BtcDiscalaimer}
      />
      <Stack.Screen
        options={{
          title: '',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="EthDiscalaimer"
        component={EthDiscalaimer}
      />
      <Stack.Screen
        options={{
          title: '',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="EthConfirmPass"
        component={EthConfirmPass}
      />
      <Stack.Screen
        options={{
          title: '',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="ChoseRecoverySeed"
        component={ChoseRecoverySeed}
      />
      <Stack.Screen
        options={{
          title: '',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="SigninRecoverySeed"
        component={SigninRecoverySeed}
      />
      <Stack.Screen
        options={{
          title: '',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="CreateNewPass"
        component={CreateNewPass}
      />
      <Stack.Screen
        options={{
          title: '',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="ConfirmNewPass"
        component={ConfirmNewPass}
      />
      <Stack.Screen
        options={{
          title: '',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="Congratulation"
        component={Congratulation}
      />
      <Stack.Screen
        options={{
          title: '',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="SendEth"
        component={SendEth}
      />
      <Stack.Screen
        options={{
          title: '',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="Transfer"
        component={Transfer}
      />
      <Stack.Screen
        options={{
          title: '',

          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="Token"
        component={Token}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="AfterTokenExchange"
        component={AfterTokenExchange}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="Topup_Order"
        component={Topup_Order}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="DexBuyKey"
        component={DexBuyKey}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="HelpSupport"
        component={HelpSupport}
      />
      <Stack.Screen
        options={{
          title: '',
          headerStyle: {
            backgroundColor: 'white',
            borderRadius: 15,
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Poppins-Medium',
            margin: 80,
            fontSize: 18,
          },
        }}
        name="ReportBug"
        component={ReportBug}
      />
    </Stack.Navigator>
  );
}
