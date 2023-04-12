import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EvolutionChain from '../EvolutionChain';
import Constant from '../../assets/Contants';

const Evolution = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Evolution Chain</Text>
      <View style={styles.content}>
        <EvolutionChain
          evolutionFrom={{
            name: 'A',
            image: Constant.Dummy.PokemonImage,
          }}
          evolutionTo={{
            name: 'B',
            image: Constant.Dummy.PokemonImage,
          }}
          level={12}
        />
        <EvolutionChain
          evolutionFrom={{
            name: 'A',
            image: Constant.Dummy.PokemonImage,
          }}
          evolutionTo={{
            name: 'B',
            image: Constant.Dummy.PokemonImage,
          }}
          level={12}
        />
        <EvolutionChain
          evolutionFrom={{
            name: 'A',
            image: Constant.Dummy.PokemonImage,
          }}
          evolutionTo={{
            name: 'B',
            image: Constant.Dummy.PokemonImage,
          }}
          level={12}
        />
        <EvolutionChain
          evolutionFrom={{
            name: 'A',
            image: Constant.Dummy.PokemonImage,
          }}
          evolutionTo={{
            name: 'B',
            image: Constant.Dummy.PokemonImage,
          }}
          level={12}
        />
      </View>
    </View>
  );
};

export default Evolution;

const styles = StyleSheet.create({
  page: {flex: 1, paddingHorizontal: 10, paddingVertical: 20},
  title: {color: Constant.Color.Black, fontSize: 18, fontWeight: '600'},
  content: {marginTop: 10},
});
