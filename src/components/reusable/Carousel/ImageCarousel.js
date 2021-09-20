import * as React from 'react';
import {Image, View, SafeAreaView, StyleSheet, Text} from 'react-native';

import Carousel, {Pagination} from 'react-native-snap-carousel';
import {BitcoinSvg, EthSvg, Yearn_logo} from '../../../svgs/YearnSvg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors} from '../../../config/colors';
import {connect} from 'react-redux';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: props.images,
    };
  }

  _renderItem({item, index}) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.4)',
          borderRadius: 24,
        }}>
        <Image
          style={{
            flex: 1,
            width: wp('63'),
          }}
          source={{
            uri: item.url,
          }}
        />
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={{flex: 2}}>
        <View
          style={{
            flex: 1,
            height: hp('2'),
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Carousel
            layout={'default'}
            ref={ref => (this.carousel = ref)}
            data={this.state.carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={this._renderItem}
            onSnapToItem={index => this.setState({activeIndex: index})}
          />
          {/* <Pagination dotsLength={3} activeDotIndex={1} /> */}
        </View>
      </SafeAreaView>
    );
  }
}

export default ImageCarousel;

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
