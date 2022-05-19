import {View, Text} from 'react-native';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../themes/appTheme';

interface IPersona {
  nombre: string;
  edad: number;
}

interface IProps extends StackScreenProps<any, any> {}

const PersonaScreen = (props: IProps) => {
  let persona = props.route.params;

  return (
    <View>
      <Text style={styles.title}>{JSON.stringify(persona, null, 3)}</Text>

      {/* <Text>{nombre}</Text>
      <Text>{edad}</Text> */}
    </View>
  );
};

export default PersonaScreen;
