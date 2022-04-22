import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';

interface IProps {
  title: string;
  position?: 'right' | 'left';
  onPress: () => void;
}
export const FloatingActionButtonFAB = ({
  title,
  position = 'right',
  onPress,
}: IProps) => {
  const Ios = () => {
    return (
      <>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={onPress}
          style={[
            styles.FABLocation,
            position === 'left' ? styles.left : styles.right,
          ]}>
          <View style={styles.fab}>
            <Text style={styles.fabText}>{title}</Text>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  const Android = () => {
    return (
      <>
        <View
          style={[
            styles.FABLocation,
            position === 'left' ? styles.left : styles.right,
          ]}>
          <TouchableNativeFeedback
            onPress={onPress}
            background={TouchableNativeFeedback.Ripple('#28425b', false, 30)}>
            <View style={styles.fab}>
              <Text style={styles.fabText}>{title}</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </>
    );
  };

  return Platform.OS === 'ios' ? Ios() : Android();
};

const styles = StyleSheet.create({
  FABLocation: {
    position: 'absolute',
    bottom: 25,
  },
  left: {
    left: 25,
  },
  right: {
    right: 25,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 2,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
