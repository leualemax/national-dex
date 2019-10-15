import List from "src/mocks/list.json";
import Missingno from "src/mocks/missingno.json";
import Move from "src/mocks/move.json";
import Type from "src/mocks/type.json";
import Types from "src/mocks/types.json";
import PokeApi from "./pokemon.service";

describe("Pokemon Service", () => {
	it("should call a pokemon with number 0", async () => {
		const response = await PokeApi.get("https://pokeapi.co/api/v2/pokemon/0");
		expect(response.data).toEqual(Missingno);
	});

	it("should call a move with number 0", async () => {
		const response = await PokeApi.get("https://pokeapi.co/api/v2/move/0");
		expect(response.data).toEqual(Move);
	});

	it("should call all types with limit of 200", async () => {
		const response = await PokeApi.type().all(200);
		expect(response.data).toEqual(Types);
	});

	it("should call all types with limit no limit", async () => {
		const response = await PokeApi.type().all();
		expect(response.data).toEqual(Types);
	});

	it("should call type from name grass", async () => {
		const response = await PokeApi.type().find_by_name("grass");
		expect(response.data).toEqual(Type);
	});

	it("should call pokemon list with limit 10000", async () => {
		const response = await PokeApi.pokemon().all(1000);
		expect(response.data).toEqual(List);
	});

	it("should call pokemon list with no limit", async () => {
		const response = await PokeApi.pokemon().all();
		expect(response.data).toEqual(List);
	});

	it("should call pokemon with number 0", async () => {
		const response = await PokeApi.pokemon().find(0);
		expect(response.data).toEqual(Missingno);
	});

	it("should call pokemon with name missingno", async () => {
		const response = await PokeApi.pokemon().find_by_name("missingno");
		expect(response.data).toEqual(Missingno);
	});
});
