import * as React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel';
import {BitcoinSvg, EthSvg, Yearn_logo} from '../../../svgs/YearnSvg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../../../config/colors';

export default class BalanceCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          balance: `$1000`,
          text: 'YFIC',
        },
        {
          balance: `$100`,
          text: 'ETH',
        },
        {
          balance: `$100`,
          text: 'BTC',
        },
      ],
    };
  }

  _renderItem({item, index}) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Text style={styles.blurryText2}>{item.balance}</Text>
        <View style={{flexDirection: 'row'}}>
          {index == 0 && <Yearn_logo width={hp('3%')} height={wp('5%')} />}
          {index == 1 && <EthSvg width={hp('3%')} height={wp('5%')} />}
          {index == 2 && <BitcoinSvg width={hp('3%')} height={wp('5%')} />}

          <Text style={styles.blurryText3}>{item.text}</Text>
        </View>
        <Pagination dotsLength={3} activeDotIndex={index} />
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            height: hp('2'),
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Carousel
            layout={'tinder'}
            ref={ref => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({activeIndex: index})}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  blurryText3: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.main,
  },
  blurryText2: {
    fontFamily: 'Poppins-Bold',
    fontSize: 40,
    color: colors.main,
  },
});
