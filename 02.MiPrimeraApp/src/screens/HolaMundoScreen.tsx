import {View, Text} from 'react-native';
import React from 'react';

export const HolaMundoScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 45,
        }}>
        Hola mundo 2{' '}
      </Text>
    </View>
  );
};
