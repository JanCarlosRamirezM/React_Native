import {SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {styles} from './src/theme/appTheme';
import {CalculadoraScreen} from './src/screens/CalculadoraScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="black" barStyle="light-content" />

      <CalculadoraScreen />
    </SafeAreaView>
  );
};

export default App;
