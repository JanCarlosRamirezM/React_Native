import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BoxObjectModel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    padding: 20,
    fontSize: 20,
    borderWidth: 10,
    color: 'white',
    marginHorizontal: 20,
    marginTop: 15,
  },
});
