import React from 'react';
import Svg, {Path, G, Circle} from 'react-native-svg';
import {View, Platform} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const PathSvg = () => {
  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -3,
        // width : wp("100%")
      }}>
      {Platform.OS == 'ios' ? (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={wp('100%')}
          height="93.158"
          viewBox="0 0 414 93.158">
          <Path
            id="Path_46"
            data-name="Path 46"
            d="M514.779,938.211H391.674a32.027,32.027,0,0,0-28.316,17.472,37.86,37.86,0,0,1-67.158,0,32.027,32.027,0,0,0-28.315-17.472H144.779c-12.15,0-22,11.328-22,25.3v42.554c0,13.974,9.849,25.3,22,25.3h370c12.15,0,22-11.329,22-25.3V963.512C536.779,949.539,526.93,938.211,514.779,938.211Z"
            transform="translate(-122.779 -938.211)"
            fill="#111B4F"
          />
        </Svg>
      ) : (
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={wp('100%')}
          height="93.158"
          viewBox="0 0 414 93.154">
          <Path
            id="Path_184"
            data-name="Path 184"
            d="M1763.053,693.589h-123.1a32.028,32.028,0,0,0-28.316,17.472,37.86,37.86,0,0,1-67.158,0,32.029,32.029,0,0,0-28.315-17.472H1393.053c-12.15,0-22,11.328-22,25.3v67.854h414V718.891C1785.053,704.917,1775.2,693.589,1763.053,693.589Z"
            transform="translate(-1371.053 -693.589)"
            fill="#111B4F"
          />
        </Svg>
      )}
    </View>
  );
};

export default PathSvg;
