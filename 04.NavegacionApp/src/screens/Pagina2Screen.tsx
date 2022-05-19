import {View, Text, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../themes/appTheme';
import {useNavigation, CommonActions} from '@react-navigation/core';
import {useEffect} from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';

export const Pagina2Screen = () => {
  const navigator = useNavigation();
  const options: StackNavigationOptions = {
    title: 'Hola mundo',
    headerBackTitle: 'Atras',
  };
  useEffect(() => {
    navigator.setOptions(options);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>

      <Button
        title="Ir a pagina3"
        onPress={() => navigator.dispatch(CommonActions.navigate('Pagina3'))}
      />

      <Text>Navegar con rutas</Text>
      <TouchableOpacity
        onPress={() =>
          navigator.dispatch(
            CommonActions.navigate('Persona', {
              nombre: 'Pedro',
              edad: 26,
            }),
          )
        }>
        <Text>Pedro</Text>
      </TouchableOpacity>
    </View>
  );
};
