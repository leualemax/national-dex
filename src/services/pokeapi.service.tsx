import axios, { AxiosPromise } from "axios";
export default class PokeApi {
  static basedGet(url: string): AxiosPromise<any[]> {
    return axios.get(`https://pokeapi.co/api/v2/${url}`);
  }
  static get(url: string): AxiosPromise<any[]> {
    return axios.get(url);
  }
}
