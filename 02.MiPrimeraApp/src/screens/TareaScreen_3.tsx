import {View, StyleSheet} from 'react-native';
import React from 'react';

export const TareaScreen_3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.caja1} />
      <View style={styles.caja2} />
      <View style={styles.caja3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#525E75',
    justifyContent: 'center',
  },

  caja1: {
    height: 100,
    width: 100,
    backgroundColor: '#151D3B',
    borderColor: 'white',
    borderWidth: 10,
    alignSelf: 'flex-end',
  },
  caja2: {
    height: 100,
    width: 100,
    backgroundColor: '#874356',
    borderColor: 'white',
    borderWidth: 10,
  },
  caja3: {
    height: 100,
    width: 100,
    backgroundColor: '#A1B57D',
    borderColor: 'white',
    borderWidth: 10,
    alignSelf: 'center',
  },
});
