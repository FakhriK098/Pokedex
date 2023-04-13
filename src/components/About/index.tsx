import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextValue from '../TextValue';
import Constant from '../../assets/Contants';
import {useRecoilValue} from 'recoil';
import {pokemonState} from '../../atoms';

const About = () => {
  const data = useRecoilValue(pokemonState);
  const abilities = data.abilities.map(item => {
    return item.ability.name;
  });
  const sprites = [
    data.sprites.front_default,
    data.sprites.back_default,
    data.sprites.front_shiny,
  ];
  return (
    <View style={styles.page}>
      <TextValue label={'Height'} value={data.height} />
      <TextValue label={'Weight'} value={data.weight} />
      <TextValue label={'Abilities'} value={abilities} />
      <Text style={styles.title}>Sprites</Text>
      <View style={styles.contentSprites}>
        {sprites.map((item, index) => {
          return (
            <Image source={{uri: item}} style={styles.image} key={index} />
          );
        })}
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  page: {flex: 1, paddingHorizontal: 10, paddingVertical: 20},
  title: {color: Constant.Color.Black, fontSize: 18, fontWeight: '600'},
  contentSprites: {
    borderColor: Constant.Color.grey_8D92A3,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  image: {
    width: 70,
    height: 70,
    marginEnd: 10,
  },
});
