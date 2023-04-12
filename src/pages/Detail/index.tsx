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

type DetailProps = {
  color: string;
};

const Detail = ({color = 'red'}: DetailProps) => {
  return (
    <View style={styles.page}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.background(color)} />
        <TouchableOpacity style={styles.back}>
          <IcBack />
        </TouchableOpacity>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>babkcasbck</Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              {Constant.Dummy.PokemonTypes.map(item => {
                return <Type type={item} size={'medium'} />;
              })}
            </View>
          </View>
          <Text style={styles.idText}>bcaback</Text>
        </View>
        <Image
          source={{uri: Constant.Dummy.PokemonImage}}
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
  back: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 20,
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  idText: {
    marginTop: 25,
    color: Constant.Color.White,
    fontSize: 14,
  },
  title: {
    color: Constant.Color.White,
    fontSize: 36,
  },
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
