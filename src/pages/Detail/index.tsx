import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Constant from '../../assets/Contants';
import {IcBack} from '../../assets';
import {DetailTabSection, Type} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {useRecoilState} from 'recoil';
import {pokemonState} from '../../atoms';

const Detail = ({route}) => {
  const navigation = useNavigation();
  const item = route.params;
  const [color] = React.useState(item.colors.name);
  const [pokemon, setPokemon] = useRecoilState(pokemonState);

  React.useEffect(() => {
    setPokemon(item);
  }, []);

  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.background(color)} />
        <TouchableOpacity
          style={styles.back(color)}
          onPress={() => {
            navigation.goBack();
          }}>
          <IcBack />
        </TouchableOpacity>
        <View style={styles.header}>
          <View>
            <Text style={styles.title(color)}>{item.name}</Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              {item.types.map(item => {
                return <Type type={item.type.name} size={'medium'} />;
              })}
            </View>
          </View>
          <Text style={styles.idText(color)}>#{item.id}</Text>
        </View>
        <Image
          source={{uri: item.sprites.other['official-artwork'].front_default}}
          style={styles.image}
        />
        <View style={styles.content}>
          <DetailTabSection />
        </View>
      </ScrollView>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: Constant.Color.White},
  background: color => ({
    backgroundColor: color,
    opacity: 0.6,
    width: '100%',
    height: 700,
    position: 'absolute',
  }),
  back: color => ({
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 20,
    backgroundColor: color === 'white' ? 'black' : Constant.Color.transparant,
    borderRadius: 30,
  }),
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  idText: color => ({
    marginTop: 25,
    color: color === 'white' ? Constant.Color.Black : Constant.Color.White,
    fontSize: 14,
  }),
  title: color => ({
    color: color === 'white' ? Constant.Color.Black : Constant.Color.White,
    fontSize: 36,
  }),
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  content: {
    paddingTop: 26,
    paddingHorizontal: 16,
    backgroundColor: Constant.Color.White,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    marginTop: -10,
    flex: 1,
  },
});
