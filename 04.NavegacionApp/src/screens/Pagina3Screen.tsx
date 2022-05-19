import {View, Text, Button} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {styles} from '../themes/appTheme';

interface IProps extends NativeStackScreenProps<any, any> {}

export const Pagina3Screen = ({navigation}: IProps) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina3Screen</Text>
      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Ir a pagina1" onPress={() => navigation.popToTop()} />
    </View>
  );
};
