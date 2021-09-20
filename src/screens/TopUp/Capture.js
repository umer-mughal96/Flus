import React, {PureComponent, Text} from 'react';
import {RNCamera} from 'react-native-camera';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {connect, useDispatch} from 'react-redux';
// import RBSheet from 'react-native-raw-bottom-sheet';
// import {RNNBottomSheet} from 'react-native-navigation-bottom-sheet';
import DarkButton from '../../components/reusable/Button/DarkButton';
import {captureImage} from '../../redux/actions/user/user';
import Footer from '../../components/reusable/Footer/Footer';
// import BottomCamera from '../../components/reusable/BottomCamera/BottomCamera';

// RNNBottomSheet.init();

class Capture extends PureComponent {
  constructor(props) {
    super(props);
  }

  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      // const data = await this.camera.takePictureAsync(options);
      this.camera.takePictureAsync(options).then(response => {
        this.props.addItem(this.props.navigation, response.uri);
        console.log(response.uri);
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          playSoundOnCapture={true}
          captureAudio={false}>
          <View style={{flex: 0.16, justifyContent: 'center'}}>
            <DarkButton
              name="Capture"
              disabled={false}
              onPress={() => this.RBSheet.open()}
            />
{/* 
            <RBSheet
              ref={ref => {
                this.RBSheet = ref;
              }}
              openDuration={250}>
              <BottomCamera />
            </RBSheet> */}
          </View>
        </RNCamera>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: (navigation, data) => {
      console.log(dispatch);
      dispatch(captureImage(navigation, data));
    },
  };
}

export default connect(mapDispatchToProps)(Capture);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'red',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
});
