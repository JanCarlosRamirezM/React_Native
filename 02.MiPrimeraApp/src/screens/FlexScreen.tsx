import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export const FlexScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.caja1}>Caja #1</Text>
      <Text style={styles.caja2}>Caja #2</Text>
      <Text style={styles.caja3}>Caja #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAEEE7',
    flexDirection: 'column',
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
    flexWrap: 'wrap',
  },
  caja1: {
    backgroundColor: '#151D3B',
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  caja2: {
    backgroundColor: '#B8405E',
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
  caja3: {
    backgroundColor: '#30475E',
    borderWidth: 2,
    borderColor: 'white',
    fontSize: 30,
  },
});
