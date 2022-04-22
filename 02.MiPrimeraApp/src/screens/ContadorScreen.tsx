import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useState} from 'react';

import {FloatingActionButtonFAB} from '../components/Components';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {contador}</Text>

      <FloatingActionButtonFAB
        title="-1"
        position="left"
        onPress={() => setContador(contador <= 0 ? 0 : contador - 1)}
      />

      <FloatingActionButtonFAB
        title="+1"
        onPress={() => setContador(contador + 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    top: -5,
  },
});
