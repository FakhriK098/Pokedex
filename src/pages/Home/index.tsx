import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import {Card, Search} from '../../components';
import Constant from '../../assets/Contants';
import {useNavigation} from '@react-navigation/native';
import {getPokemonList} from '../../action/pokemon.action';
import {useRecoilState} from 'recoil';
import {pokemonListState} from '../../atoms';

const Home = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const [clicked, setClicked] = React.useState(false);
  const navigation = useNavigation();
  const [pokemonList, setPokemonList] = useRecoilState(pokemonListState);
  const [offset, setOffset] = React.useState(0);

  const renderData = () => {
    setPokemonList(prevRes => ({
      ...prevRes,
      onLoading: true,
    }));
    getPokemonList(offset).then(res => {
      setPokemonList(res);
    });
  };

  const fetchMoreData = () => {
    setPokemonList(prevRes => ({
      ...prevRes,
      moreLoading: true,
    }));
    setOffset(offset + 1);
    getPokemonList(offset).then(res => {
      setPokemonList(prevRes => ({
        ...prevRes,
        res,
      }));
    });
  };

  React.useEffect(() => {
    renderData();
  }, []);

  const renderFooter = () => {
    return <View>{pokemonList.moreLoading && <ActivityIndicator />}</View>;
  };

  return (
    <View style={styles.page}>
      <Search
        clicked={clicked}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setClicked={setClicked}
      />
      <View style={styles.content}>
        {pokemonList.isLoading ? (
          <View>
            <ActivityIndicator size={'large'} />
          </View>
        ) : (
          <FlatList
            data={pokemonList.data}
            renderItem={({item, index}) => (
              <Card
                name={item.name}
                imageUrl={item.sprites.other['official-artwork'].front_default}
                types={item.types}
                onPress={() => {
                  navigation.navigate(Constant.Router.Detail, item);
                }}
                key={index}
                color={item.colors.name}
              />
            )}
            ListFooterComponent={renderFooter}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            onEndReachedThreshold={1}
            onEndReached={fetchMoreData}
          />
        )}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 20,
    backgroundColor: Constant.Color.White,
  },
  content: {
    marginTop: 20,
    marginBottom: 50,
  },
});
