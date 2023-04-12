import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Constant from '../../assets/Contants';

type ChainType = {
  name: string;
  image: string;
};

type EvolutionChainProps = {
  evolutionFrom: ChainType;
  evolutionTo: ChainType;
  level: number;
};

const EvolutionChain = ({
  evolutionFrom,
  evolutionTo,
  level,
}: EvolutionChainProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={{uri: evolutionFrom.image}} style={styles.image} />
        <Text style={styles.name}>{evolutionFrom.name}</Text>
      </View>
      <Text style={styles.lavel}>Lvl {level}</Text>
      <View style={styles.content}>
        <Image source={{uri: evolutionTo.image}} style={styles.image} />
        <Text style={styles.name}>{evolutionTo.name}</Text>
      </View>
    </View>
  );
};

export default EvolutionChain;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  image: {width: 100, height: 100},
  name: {fontSize: 16, color: Constant.Color.Black, marginTop: 8},
  lavel: {fontSize: 16, color: Constant.Color.Black, fontWeight: '800'},
  content: {alignItems: 'center'},
});
