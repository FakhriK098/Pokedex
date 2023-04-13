import {atom, selector} from 'recoil';
import {Evolution, Evolves, Pokemon} from '../types';
import Constant from '../assets/Contants';
import {createImgLink} from '../utils';

const initPokemon: Pokemon = {
  id: 0,
  name: '',
  types: [],
  sprites: {
    back_default: '',
    back_shiny: '',
    front_default: '',
    front_shiny: '',
    other: {'official-artwork': {front_default: ''}},
  },
  weight: 0,
  height: 0,
  moves: [],
  species: {
    name: '',
    url: '',
  },
  colors: {
    name: '',
  },
  abilities: [],
  evolutionChain: {
    url: '',
  },
  chain: {
    evolution_details: [],
    evolves_to: [],
    species: {
      name: '',
      url: '',
    },
  },
};

type Result = {
  data: Pokemon[];
  isLoading: boolean;
  moreLoading: boolean;
};

const initResult: Result = {
  data: [],
  isLoading: false,
  moreLoading: false,
};

export const loadMoreState = atom<boolean>({
  key: Constant.Key.loadMoreState,
  default: true,
});

export const loadingState = atom<boolean>({
  key: Constant.Key.loadingState,
  default: false,
});

export const pokemonListState = atom<Result>({
  key: Constant.Key.pokemonListState,
  default: initResult,
});

export const pokemonState = atom<Pokemon>({
  key: Constant.Key.pokemonState,
  default: initPokemon,
});

export const getEvolutionChain = selector({
  key: Constant.Key.pokemonEvolutionChain,
  get: ({get}) => {
    const pokemon = get(pokemonState);
    const evolutionResult: Evolution[] = [];
    let hasEvolution = true;

    if (pokemon.chain) {
      hasEvolution = pokemon.chain.evolves_to.length > 0;
      let evolve: Evolves = pokemon.chain;
      while (hasEvolution) {
        const evol: Evolution = {
          evolutionFrom: evolve.species.name,
          level: evolve.evolves_to[0].evolution_details[0].min_level.toString(),
          evolutionTo: evolve.evolves_to[0].species.name,
          evolutionImgFrom: createImgLink(0, evolve.species.url),
          evolutionImgTo: createImgLink(0, evolve.evolves_to[0].species.url),
        };

        evolutionResult.push(evol);
        hasEvolution = evolve.evolves_to[0].evolves_to.length > 0;
        evolve = evolve.evolves_to[0];
      }
    }

    return evolutionResult;
  },
});
