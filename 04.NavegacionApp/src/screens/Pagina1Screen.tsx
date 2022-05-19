import {View, Text, Button} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {styles} from '../themes/appTheme';

interface IProps extends NativeStackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: IProps) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title="Ir a pagina2"
        onPress={() => navigation.navigate('Pagina2')}
      />
      <Button
        title="Ver persona"
        onPress={() => navigation.navigate('Persona')}
      />
    </View>
  );
};
