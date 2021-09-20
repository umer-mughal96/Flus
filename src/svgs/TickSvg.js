import React from 'react';
import {View} from 'react-native';
import Svg, {
  Defs,
  G,
  Line,
  LinearGradient,
  Stop,
  Circle,
  Path,
} from 'react-native-svg';

export default function Ticksvgscreen({navigation}) {
  return (
    <View>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="70"
        height="70"
        viewBox="0 0 43 43">
        <G
          id="Group_121"
          data-name="Group 121"
          transform="translate(-4261 -318)">
          <Circle
            id="Ellipse_23"
            data-name="Ellipse 23"
            cx="21.5"
            cy="21.5"
            r="21.5"
            transform="translate(4261 318)"
            fill="#111b4f"
          />
          <G
            id="Icon_ionic-ios-notifications"
            data-name="Icon ionic-ios-notifications"
            transform="translate(4268.144 325.07)">
            <Path
              id="Path_60"
              data-name="Path 60"
              d="M16.893,30.853a2.239,2.239,0,0,0,2.284-2.517H14.6A2.24,2.24,0,0,0,16.893,30.853Z"
              transform="translate(-2.546 -7.922)"
              fill="#fff"
            />
            <Path
              id="Path_61"
              data-name="Path 61"
              d="M21.76,18c-.731-.964-2.17-1.529-2.17-5.846,0-4.431-1.956-6.211-3.78-6.639-.171-.043-.294-.1-.294-.28V5.1a1.159,1.159,0,1,0-2.317,0v.138c0,.176-.123.237-.294.28-1.828.432-3.78,2.208-3.78,6.639,0,4.317-1.439,4.877-2.17,5.846a.943.943,0,0,0,.755,1.51h13.3A.943.943,0,0,0,21.76,18Z"
              transform="translate(0 0)"
              fill="#fff"
            />
          </G>
        </G>
      </Svg>
    </View>
  );
}
