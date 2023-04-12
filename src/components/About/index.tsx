import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextValue from '../TextValue';
import Constant from '../../assets/Contants';

const About = () => {
  const data = Constant.Dummy.PokemonAbout;
  return (
    <View style={styles.page}>
      <TextValue label={'Species'} value={data.species} />
      <TextValue label={'Height'} value={data.height.toString()} />
      <TextValue label={'Weight'} value={data.weight.toString()} />
      <TextValue label={'Abilities'} value={data.abilities.toString()} />
      <Text style={styles.title}>Sprites</Text>
      <View style={styles.contentSprites}>
        {Constant.Dummy.PokemenSprites.map((item, index) => {
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
