import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Card} from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Dex({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.headerText}>Exploring De-Fi</Text>
        <View style={styles.CardWarpper}>
          <Card elevation={2} cornerRadius={14} style={styles.card}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AfterTokenExchange')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              
              <Text style={styles.svgText}>Token exchange</Text>

              <Icon
                name="chevron-forward-sharp"
                color="#000000"
                size={18}
                style={{marginLeft: '60%'}}
              />
            </TouchableOpacity>
          </Card>
          <Card elevation={2} cornerRadius={14} style={styles.card}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Capture')} //Capture  //afterMobileVerify
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.svgText}>Maker/DAO (Borrowing)</Text>

              <Icon
                name="chevron-forward-sharp"
                color="#000000"
                size={18}
                style={{marginLeft: '46%'}}
              />
            </TouchableOpacity>
          </Card>
          <Card elevation={2} cornerRadius={14} style={styles.card}>
            <TouchableOpacity
              onPress={() => navigation.navigate('afterMobileVerify')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.svgText}>Yearn (To earn interest)</Text>

              <Icon
                name="chevron-forward-sharp"
                color="#000000"
                size={18}
                style={{marginLeft: '45%'}}
              />
            </TouchableOpacity>
          </Card>
          <Card elevation={2} cornerRadius={14} style={styles.card}>
            <TouchableOpacity
              onPress={() => navigation.navigate('afterMobileVerify')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.svgText}>Uniswap liquidity (Invest)</Text>

              <Icon
                name="chevron-forward-sharp"
                color="#000000"
                size={18}
                style={{marginLeft: '42%'}}
              />
            </TouchableOpacity>
          </Card>
          <Card elevation={2} cornerRadius={14} style={styles.card}>
            <TouchableOpacity
              onPress={() => navigation.navigate('afterMobileVerify')}
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.svgText}>NFTs exchange</Text>

              <Icon
                name="chevron-forward-sharp"
                color="#000000"
                size={18}
                style={{marginLeft: '60%'}}
              />
            </TouchableOpacity>
          </Card>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
  },
  cardContainer: {
    flex: 1,
    marginTop: 40,
  },
  headerText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  card: {
    flex: 0.13,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    elevation: 5,
  },

  cardText: {
    fontFamily: 'Poppins-Medium',
  },
  CardWarpper: {
    flex: 0.8,
    // backgroundColor: 'red',
  },
});
