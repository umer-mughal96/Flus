// Make a Blur Background in React Native
// https://aboutreact.com/blur-background/

// import React in our code
import React, {useState, createRef} from 'react';

// import all the components we are going to use
import {
  Image,
  InteractionManager,
  StyleSheet,
  Switch,
  Text,
  View,
  TouchableOpacity,
  findNodeHandle,
} from 'react-native';

//import BlurView to make the Blur Background
import {BlurView} from '@react-native-community/blur';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import Referral from '../../../screens/Profile/RefferalEarnings/Referral';

const ShareModaal = () => {
  const [showBlur, setShowBlur] = useState(false);
  const [viewRef, setViewRef] = useState(null);
  const [blurType, setBlurType] = useState('light');
  const backgroundImageRef = createRef();

  const tintColor = ['#ffffff', '#000000'];
  if (blurType === 'xlight') {
    tintColor.reverse();
  }

  const renderBlurView = () => {
    //Function for the blur background
    return (
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>
        {viewRef && (
          <BlurView
            viewRef={viewRef}
            style={styles.blurViewStyle}
            blurRadius={1}
            blurType={blurType}
            // Additional available on Android
            // blurRadius={20}
            // downsampleFactor={10}
            // overlayColor={'rgba(0, 0, 255, .6)'}
          />
        )}
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
            paddingBottom: 32,
          }}>
          <Text style={[styles.textStyle, {color: tintColor[0]}]}>
            Blur component
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Referral />
      {showBlur ? renderBlurView() : null}
    </View>
  );
};

export default ShareModaal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    position: 'absolute',
    height: heightPercentageToDP(100),
  },
  imageStyle: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    resizeMode: 'cover',
    width: null,
    height: null,
  },
  blurViewStyle: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  textStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#d0d0d0',
  },
  blurToggleStyle: {
    position: 'absolute',
    top: 30,
    alignItems: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    width: 300,
    marginLeft: 100,
    marginRight: 100,
    marginTop: 16,
  },
});
