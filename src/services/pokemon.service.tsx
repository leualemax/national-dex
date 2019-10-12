import axios, { AxiosPromise } from "axios";

export default class PokemonService {
  public static fetch(id: number): AxiosPromise<any[]> {
    const url: string = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return axios.get(url);
  }
}
