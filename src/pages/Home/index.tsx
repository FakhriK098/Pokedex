import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import {Card, Search} from '../../components';
import Constant from '../../assets/Contants';
import {useNavigation} from '@react-navigation/native';
import {getPokemonList, getSearchPokemon} from '../../action/pokemon.action';
import {useRecoilState} from 'recoil';
import {loadMoreState, loadingState, pokemonListState} from '../../atoms';
import {Pokemon} from '../../types';

const Home = () => {
  const navigation = useNavigation();
  const [searchValue, setSearchValue] = React.useState('');
  const [clicked, setClicked] = React.useState(false);
  const [pokemonList, setPokemonList] = useRecoilState(pokemonListState);
  const [loading, setLoading] = useRecoilState(loadingState);
  const [loadMore, setLoadMore] = useRecoilState(loadMoreState);
  const [offset, setOffset] = React.useState(0);

  const renderData = () => {
    setLoading(true);
    getPokemonList(offset).then(res => {
      setLoading(false);
      const newPokemon: Pokemon[] = res.data;
      setPokemonList(prevPok => ({
        ...prevPok,
        data: [...pokemonList.data, ...newPokemon],
      }));
    });
  };

  const fetchMoreData = () => {
    if (loadMore) {
      setOffset(offset + 8);
    }
  };

  const searchPokemon = () => {
    setLoading(true);
    setLoadMore(false);
    getSearchPokemon(searchValue).then(res => {
      setLoading(false);
      setPokemonList({data: [res.data]});
    });
  };

  React.useEffect(() => {
    renderData();
  }, [offset]);

  const renderFooter = () => {
    return (
      <View style={styles.containerLoading}>
        {loading && <ActivityIndicator size={'large'} />}
      </View>
    );
  };

  return (
    <View style={styles.page}>
      <Search
        clicked={clicked}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setClicked={setClicked}
        onSubmit={searchPokemon}
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
                key={item.name}
                color={item.colors.name}
              />
            )}
            ListFooterComponent={renderFooter}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            onEndReachedThreshold={0}
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
  containerLoading: {
    marginVertical: 10,
  },
});
