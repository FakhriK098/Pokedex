import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcCross, IcSearch} from '../../assets';
import Constant from '../../assets/Contants';

type SearchProps = {
  clicked: boolean;
  searchValue: string;
  setSearchValue: Function;
  setClicked: Function;
};

const Search = ({
  clicked,
  searchValue,
  setSearchValue,
  setClicked,
}: SearchProps) => {
  return (
    <View style={styles.container(clicked)}>
      <View style={styles.searchBarClicked}>
        <IcSearch />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchValue}
          onChangeText={value => setSearchValue(value)}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {clicked && searchValue.length > 0 && (
          <TouchableOpacity
            onPress={() => {
              setSearchValue('');
            }}>
            <IcCross />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: clicked => ({
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    borderColor: clicked ? Constant.Color.Black : Constant.Color.grey_D7D7D7,
    borderRadius: 15,
    borderWidth: 1,
    paddingEnd: 20,
  }),
  searchBarClicked: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    marginHorizontal: 8,
    width: '90%',
  },
});
