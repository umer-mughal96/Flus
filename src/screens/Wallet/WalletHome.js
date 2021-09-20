import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import {hp, wp} from '../../components/reusable/Dimension/Dimen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';
import Footer from '../../components/reusable/Footer/Footer';
import LinearGradient from 'react-native-linear-gradient';
import {Yearn_logo, BitcoinSvg, EthSvg} from '../../svgs/YearnSvg';
import {colors} from '../../config/colors';
import {useSelector} from 'react-redux';
import BalanceCarousel from '../../components/reusable/Carousel/Carousel';
import {EyeSvg, UpSvg} from '../../svgs/WalletHomeSvgs';
import {ButtonSendUpSvg2, RecieveSendUpSvg2} from '../../svgs/BtcDetailSvg';

export default function WalletHome({navigation}) {
  const {btc} = useSelector(s => s.Btc);
  const {eth} = useSelector(s => s.Eth);
  const [ethBalance, setEthereumBalance] = useState('');
  const [yficBalance, setYficBalance] = useState('');

  console.log(
    '🚀 ~ file: WalletHome.js ~ line 292 ~ WalletHome ~ yficBalance',
    yficBalance,
  );
  // const web3 = new Web3(
  //   new Web3.providers.HttpProvider(
  //     'https://mainnet.infura.io/v3/1b7d0652789f4e5a8aeddf37e660dbdc',
  //   ),
  // );
  // useEffect(async () => {
  //   if (eth) {
  //     console.log(
  //       '🚀 ~ file: WalletHome.js ~ line 297 ~ WalletHome ~ eth',
  //       eth,
  //     );
  //     console.log(
  //       '🚀 ~ file: WalletHome.js ~ line 297 ~ WalletHome ~ btc',
  //       btc,
  //     );
  //     web3.eth.getBalance(eth.address, function (err, result) {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         console.log(web3.utils.fromWei(result, 'ether') + ' E');
  //         setEthereumBalance(result);
  //       }
  //     });
  //   }

  //   const abi = [
  //     {
  //       constant: true,
  //       inputs: [{name: '_owner', type: 'address'}],
  //       name: 'balanceOf',
  //       outputs: [{name: 'balance', type: 'uint256'}],
  //       type: 'function',
  //     },
  //   ];
  //   const contractAddress = '0x9CF4679c67BEE8dA2D6F58c64592fFf6beE79330';
  //   const contract = new web3.eth.Contract(abi, contractAddress);
  //   async function getBalance() {
  //     const result = await contract.methods.balanceOf(eth.address).call(); // 29803630997051883414242659
  //     const format = web3.utils.fromWei(result); // 29803630.997051883414242659
  //     setYficBalance(format);
  //   }
  //   const b = await getBalance();
  // }, [eth]);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
        translucent={true}
      />
      {/* ....View 1..... */}
      <View style={styles.view1}>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'Poppins-Regular',
              textDecorationLine: 'underline',
            }}>
            Transfer or Gas fee?
          </Text>
        </TouchableOpacity>
      </View>
      {/* ....view 2 .....*/}
      <View style={styles.ViewWapper}>
        <Card style={styles.view2}>
          <View style={{position: 'absolute', right: 5, top: 5}}>
            <EyeSvg />
          </View>
          <Text style={{fontSize: 14, fontFamily: 'Poppins', color: '#FFFFFF'}}>
            Currency USD
          </Text>
          <Text
            style={{
              fontSize: 36,
              fontFamily: 'Poppins-Bold',
              color: '#FFFFFF',
            }}>
            $30,529.00
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: 'Poppins-Medium',
              color: '#FFFFFF',
            }}>
            0.7 BTC
          </Text>
        </Card>
      </View>
      {/* ....view3..... */}

      <View style={styles.CardWarpper}>
        <Card style={styles.SendCard}>
          <TouchableOpacity onPress={() => navigation.navigate('SendEth')}>
            <ButtonSendUpSvg2 width={48} height={48} />

            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14}}>
              Send
            </Text>
          </TouchableOpacity>
        </Card>

        <Card style={styles.ReceiveCard}>
          <TouchableOpacity onPress={() => navigation.navigate('recieveBtc')}>
            <RecieveSendUpSvg2 width={48} height={48} />

            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14}}>
              Receive
            </Text>
          </TouchableOpacity>
        </Card>
        <Card style={styles.ExchangeCard}>
          <TouchableOpacity>
            <Text style={{fontFamily: 'Poppins-Medium', fontSize: 14}}>
              Exchange
            </Text>
          </TouchableOpacity>
        </Card>
      </View>
      {/* ....view 4..... */}
      <View style={styles.TextWarpper}>
        <TouchableOpacity
          onPress={() => navigation.navigate('BuyCryptocurrency')}>
          <UpSvg />
        </TouchableOpacity>
        <Text style={{fontSize: 18, fontFamily: 'Poppins-Medium'}}>
          Top up your Account now
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'Poppins-Light',
            textAlign: 'center',
          }}>
          Add some funds to start exploring the possibilities of cryptocurrency
        </Text>
      </View>
      {/* .....Footer....... */}
      <View
        style={{
          justifyContent: 'flex-end',
          flex: 1,
        }}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: wp(360),
    height: hp(640),
  },
  view1: {
    flex: 0.4,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ViewWapper: {
    flex: 0.7,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'row',
  },
  view2: {
    flex: 0.85,
    borderRadius: 19,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#575757',
  },
  CardWarpper: {
    flex: 0.6,
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.2,
    elevation: 1,
  },
  SendCard: {
    flex: 0.3,
    height: '72%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 19,
  },

  ReceiveCard: {
    flex: 0.3,
    height: '72%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 19,
  },
  ExchangeCard: {
    flex: 0.3,
    height: '72%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 19,
  },
  TextWarpper: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    // backgroundColor: 'red',
  },
});

// useEffect(async () => {

//   if (eth) {
//     // console.log("🚀 ~ file: WalletHome.js ~ line 297 ~ WalletHome ~ eth", eth)
//     // console.log("🚀 ~ file: WalletHome.js ~ line 297 ~ WalletHome ~ btc", btc)
//     web3.eth.getBalance(eth.address, function (err, result) {
//       if (err) {
//         console.log(err)
//       } else {
//         console.log(web3.utils.fromWei(result, "ether") + " E")
//         setEthereumBalance(result)
//       }
//     })
//   }

//   const abi = [
//     {
//       constant: true,
//       inputs: [{ name: "_owner", type: "address" }],
//       name: "balanceOf",
//       outputs: [{ name: "balance", type: "uint256" }],
//       type: "function",
//     }
//   ]
//   const contractAddress = "0x9CF4679c67BEE8dA2D6F58c64592fFf6beE79330"
//   const contract = new web3.eth.Contract(abi, contractAddress);
//   async function getBalance() {
//     const result = await contract.methods.balanceOf(eth.address).call(); // 29803630997051883414242659
//     const format = web3.utils.fromWei(result); // 29803630.997051883414242659
//     setYficBalance(format)

//   }
//   const b = await getBalance();

// }, [eth])
