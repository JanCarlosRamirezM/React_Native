import {View, StyleSheet} from 'react-native';
import React from 'react';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Caja1} />
      <View style={styles.Caja2} />
      <View style={styles.Caja3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#28c4d9',
    // height: 350,
    // width: 350,
  },
//   Botton
  Caja1: {
    width: 100,
    height: 100,
    backgroundColor: '#548CFF',
    borderColor: 'white',
    borderWidth: 5,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },

  //   Top
  Caja2: {
    width: 100,
    height: 100,
    backgroundColor: '#3E8E7E',
    borderColor: 'white',
    borderWidth: 5,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  Caja3: {
    width: 100,
    height: 100,
    backgroundColor: '#D96098',
    borderColor: 'white',
    borderWidth: 5,
    position: 'absolute',
    left: 0,
    top: 0,
  },
});
