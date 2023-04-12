import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Constant from '../../assets/Contants';
import Type from '../Type';

type CardProps = {
  name: string;
  imageUrl: string;
  types: string[];
  onPress: Function;
};
const Card = ({name, imageUrl, types = [], onPress}: CardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.type}>
            {types.map(type => {
              return <Type type={type} size={'small'} />;
            })}
          </View>
        </View>
        <Image source={{uri: imageUrl}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: Constant.Color.grey_D7D7D7,
    padding: 20,
    height: 140,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 10,
  },
  title: {
    fontSize: 18,
    color: Constant.Color.Black,
  },
  image: {width: 100, height: 100},
  type: {
    flexDirection: 'column',
    marginTop: 4,
    flex: 1,
    flexWrap: 'wrap',
    maxWidth: 240,
  },
});
