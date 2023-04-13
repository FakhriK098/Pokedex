import Axios from 'axios';
import Constant from '../assets/Contants';
import {Pokemon} from '../types';

export const getPokemonList = async (offset: number) => {
  const resPoke = await Axios.get(
    `${Constant.BaseUrl}?limit=8&offset=${offset}`,
  );
  const result: Pokemon[] = await Promise.all(
    resPoke.data.results.map(async (item): Promise<any> => {
      const pokemon: Pokemon = (await Axios.get(item.url)).data;
      return pokemon;
    }),
  );

  const finalResult = await Promise.all(
    result.map(async (item): Promise<Pokemon> => {
      const b = (await Axios.get(item.species.url)).data;
      return {
        ...item,
        colors: {name: b.color.name},
        evolutionChain: {url: b.evolution_chain.url},
      };
    }),
  );

  if (offset > 0) {
    return {data: finalResult, isLoading: false};
  } else {
    return {data: finalResult, moreLoading: false};
  }
};

export const getSearchPokemon = async (name: string) => {
  const resPokemon = await Axios.get(`${Constant.BaseUrl}/${name}`);
  const result = (await Axios.get(resPokemon.data.species.url)).data;
  const finalResult: Pokemon = {
    ...resPokemon.data,
    colors: {name: result.color.name},
    evolutionChain: {url: result.evolution_chain.url},
  };

  return {data: finalResult, isLoading: false};
};

export const fetchPokemon = async url => {
  const response = await Axios.get(url);
  return response;
};
