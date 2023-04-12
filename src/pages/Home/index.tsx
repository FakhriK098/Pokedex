import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Card, Search} from '../../components';
import Constant from '../../assets/Contants';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const [clicked, setClicked] = React.useState(false);
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <Search
        clicked={clicked}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setClicked={setClicked}
      />
      <View style={styles.content}>
        <Card
          name={Constant.Dummy.PokemonName}
          imageUrl={Constant.Dummy.PokemonImage}
          types={Constant.Dummy.PokemonTypes}
          onPress={() => {
            navigation.navigate(Constant.Router.Detail);
          }}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 20,
    backgroundColor: Constant.Color.white,
  },
  content: {
    marginTop: 20,
  },
});
