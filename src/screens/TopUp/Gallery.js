import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import DarkButton from '../../components/reusable/Button/DarkButton';
import Footer from '../../components/reusable/Footer/Footer';
// import ImageCarousel from '../../components/reusable/Carousel/ImageCarousel';
import ImageCarousel from '../../components/reusable/Carousel/ImageCarousel';

const Gallery = ({navigation}) => {
  const {url} = useSelector(s => s.User);
  console.log('🚀 ~ file: Gallery.js ~ line 11 ~ Gallery ~ url', url);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 22,
            lineHeight: 29,
            maxWidth: 230,
            textAlign: 'center',
          }}>
          Uploaded images of Gift Cards
        </Text>
      </View>
      <ImageCarousel images={url} />

      <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
        <DarkButton
          name="Proceed"
          disabled={false}
          onPress={() => navigation.navigate('plasma8')}
        />
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

export default Gallery;
