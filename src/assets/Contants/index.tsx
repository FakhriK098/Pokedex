const Router = {
  Home: 'Home',
  Detail: 'Detail',
};

const Color = {
  Black: '#2E2E2E',
  White: '#FFFFFF',
  grey_D7D7D7: '#D7D7D7',
  grey_8D92A3: '#8D92A3',
  transparant: '#ffffff00',
};

const Dummy = {
  PokemonImage:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  PokemonName: 'bulbasaur',
  PokemonTypes: ['grass', 'posion', 'grass', 'posion'],
  PokemenSprites: [
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png',
  ],
  PokemonAbout: {
    species: 'seed',
    height: 7,
    weight: 7,
    abilities: ['overgrow', 'chlorophyll'],
  },
};

const Key = {
  pokemonListState: 'pokemonListState',
  pokemonState: 'pokemonState',
  pokemonListStatsState: 'pokemonListStatsState',
  fetchPokemon: 'fetchPokemon',
  pokemonEvolutionChain: 'pokemonEvolutionChain',
  loadingState: 'loadingState',
  loadMoreState: 'loadMoreState',
};

const BaseUrl = 'https://pokeapi.co/api/v2/pokemon';
const BaseUrlImg =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

const Constant = {
  Router,
  Color,
  Dummy,
  Key,
  BaseUrl,
  BaseUrlImg,
} as const;

export default Constant;
