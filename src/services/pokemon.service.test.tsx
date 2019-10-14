import List from "src/mocks/list.json";
import Missingno from "src/mocks/missingno.json";
import Move from "src/mocks/move.json";
import Type from "src/mocks/type.json";
import Types from "src/mocks/types.json";
import PokemonService from "./pokemon.service";

describe("Pokemon Service", () => {
  it("should call [get] pokemon", done => {
    PokemonService.get("https://pokeapi.co/api/v2/pokemon/0").then(response => {
      expect(response.data).toEqual(Missingno);
      done();
    });
  });

  it("should call [get] moves", done => {
    PokemonService.get("https://pokeapi.co/api/v2/move/0").then(response => {
      expect(response.data).toEqual(Move);
      done();
    });
  });

  it("should call [get] types", done => {
    PokemonService.type().then(response => {
      expect(response.data).toEqual(Types);
      done();
    });
  });

  it("should call [get] type grass", done => {
    PokemonService.type("grass").then(response => {
      expect(response.data).toEqual(Type);
      done();
    });
  });

  it("should call [get] pokemons", done => {
    PokemonService.pokemon().then(response => {
      expect(response.data).toEqual(List);
      done();
    });
  });

  it("should call [get] pokemon with number 0", done => {
    PokemonService.pokemon("0").then(response => {
      expect(response.data).toEqual(Missingno);
      done();
    });
  });

  it("should call [get] byName with missingno", done => {
    PokemonService.byName("missingno").then(response => {
      expect(response.data).toEqual(Missingno);
      done();
    });
  });
});
