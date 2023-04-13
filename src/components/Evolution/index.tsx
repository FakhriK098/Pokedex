import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EvolutionChain from '../EvolutionChain';
import Constant from '../../assets/Contants';
import {useRecoilState, useRecoilValue} from 'recoil';
import {getEvolutionChain, pokemonState} from '../../atoms';
import {fetchPokemon} from '../../action/pokemon.action';

const Evolution = () => {
  const data = useRecoilValue(pokemonState);
  const [pokemon, setPokemon] = useRecoilState(pokemonState);
  const evolution = useRecoilValue(getEvolutionChain);
  React.useEffect(() => {
    fetchPokemon(data.evolutionChain.url).then(res => {
      setPokemon(prevPoke => ({
        ...prevPoke,
        chain: res.data.chain,
      }));
    });
  }, []);
  return (
    <View style={styles.page}>
      <Text style={styles.title}>Evolution Chain</Text>
      <View style={styles.content}>
        {evolution.map((item, index) => {
          return (
            <EvolutionChain
              evolutionFrom={{
                name: item.evolutionFrom,
                image: item.evolutionImgFrom,
              }}
              evolutionTo={{
                name: item.evolutionTo,
                image: item.evolutionImgTo,
              }}
              level={item.level}
            />
          );
        })}
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
