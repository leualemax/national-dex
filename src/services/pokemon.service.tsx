import axios, { AxiosPromise } from "axios";

export default class PokemonService {
  public static pokemon(query?: string): AxiosPromise<any[]> {
    return this.get(`https://pokeapi.co/api/v2/pokemon/${query ? query : '?limit=1000'}`);
  }

  public static type(query?: string): AxiosPromise<any[]> {
    return this.get(`https://pokeapi.co/api/v2/type/${query ? query : '?limit=200'}`);
  }

  public static byName(name?: string): AxiosPromise<any[]> {
    return this.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
  
  public static get(url: string): AxiosPromise<any[]> {
    return axios.get(url);
  }
}
