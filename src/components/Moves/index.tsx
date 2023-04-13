import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useRecoilValue} from 'recoil';
import {pokemonState} from '../../atoms';
import Type from '../Type';

const Moves = () => {
  const data = useRecoilValue(pokemonState);
  const moves = data.moves.slice(0, 10);
  return (
    <View style={styles.type}>
      {moves.map((item, index) => {
        return <Type type={item.move.name} size={'medium'} />;
      })}
    </View>
  );
};

export default Moves;

const styles = StyleSheet.create({
  type: {
    flexDirection: 'row',
    marginTop: 4,
    flex: 1,
    flexWrap: 'wrap',
    padding: 10,
  },
});
