import axios, { AxiosPromise } from "axios";

export default class PokemonService {
  public static fetch(id: number): AxiosPromise<any[]> {
    const url: string = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return axios.get(url);
  }

  public static specie(url: string): AxiosPromise<any[]> {
    return axios.get(url);
  }

  public static evolutions(url: string): AxiosPromise<any[]> {
    return axios.get(url);
  }

  public static move(url: string): AxiosPromise<any[]> {
    return axios.get(url);
  }
}
