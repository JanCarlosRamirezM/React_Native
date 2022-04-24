import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import React from 'react';

export const DimensionesScreen = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.caja1, width: width * 0.5}}></View>
        <View style={styles.caja2}></View>
      </View>
      <Text style={styles.title}>
        W: {width} - H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: '100%',
    height: 300,
  },
  caja1: {
    height: '50%',
    //    width: '50%',
    backgroundColor: '#151D3B',
  },
  caja2: {backgroundColor: '#B8405E'},
  title: {
    margin: 25,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
