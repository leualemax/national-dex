import axios, { AxiosPromise } from "axios";
export default class PokeApi {
	public static base = "https://pokeapi.co/api/v2";

	public static get(url: string): AxiosPromise<any[]> {
		return axios.get(url);
	}

	public static pokemon() {
		return {
			all: (limit?: number) => {
				return PokeApi.get(
					`${PokeApi.base}/pokemon/${limit ? `?limit=${limit}` : ""}`
				);
			},
			find: (id: number) => {
				return PokeApi.get(`${PokeApi.base}/pokemon/${id}`);
			},
			find_by_name: (name: string) => {
				return PokeApi.get(`${PokeApi.base}/pokemon/${name}`);
			}
		};
	}

	public static type() {
		return {
			all: (limit?: number) => {
				return PokeApi.get(
					`${PokeApi.base}/type/${limit ? `?limit=${limit}` : ""}`
				);
			},
			find_by_name: (name: string) => {
				return PokeApi.get(`${PokeApi.base}/type/${name}`);
			}
		};
	}
}
