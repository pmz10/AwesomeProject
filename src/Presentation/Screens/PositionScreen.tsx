import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenBox} />
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#28C4D9'
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6', 
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B', 
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
  },
  greenBox: {
    // width: 100,
    // height: 100,
    backgroundColor: 'green', 
    borderWidth: 10,
    borderColor: 'white',
     //position: 'absolute',
    // bottom: 0,
    // right: 0,
    ...StyleSheet.absoluteFillObject,
  },
});

export default PositionScreen;
