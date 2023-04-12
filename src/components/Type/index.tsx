import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Constant from '../../assets/Contants';

type TypeProps = {
  type: string;
  size: 'small' | 'medium' | 'large';
};

const Type = ({type, size}: TypeProps) => {
  const fontSize = () => {
    switch (size) {
      case 'small': {
        return 12;
      }
      case 'medium': {
        return 14;
      }
      case 'large': {
        return 16;
      }
      default: {
        return 12;
      }
    }
  };
  return (
    <View style={styles.containter}>
      <Text style={styles.title(fontSize())}>{type}</Text>
    </View>
  );
};

export default Type;

const styles = StyleSheet.create({
  containter: {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignSelf: 'baseline',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 4,
    marginEnd: 4,
    backgroundColor: Constant.Color.White,
  },
  title: size => ({
    color: Constant.Color.Black,
    fontSize: size,
  }),
});
