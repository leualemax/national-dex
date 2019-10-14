/* istanbul ignore file */
import axios from "axios";
import Missingno from "src/mocks/missingno.json";
import Type from "src/mocks/type.json";
import Types from "src/mocks/types.json";
import List from "src/mocks/list.json";
import Move from "src/mocks/move.json";
import MockAdapter from "axios-mock-adapter";

global.XMLHttpRequest = undefined;

const mock = new MockAdapter(axios);

mock.onGet("https://pokeapi.co/api/v2/pokemon/0").reply(200, Missingno);

mock.onGet("https://pokeapi.co/api/v2/pokemon/22").reply(200, Missingno);

mock.onGet("https://pokeapi.co/api/v2/pokemon/missingno").reply(200, Missingno);

mock.onGet("https://pokeapi.co/api/v2/pokemon/?limit=1000").reply(200, List);

mock.onGet("https://pokeapi.co/api/v2/pokemon/404").reply(404, {});

mock.onGet("https://pokeapi.co/api/v2/type/grass").reply(200, Type);

mock.onGet("https://pokeapi.co/api/v2/type/?limit=200").reply(200, Types);

mock.onGet("https://pokeapi.co/api/v2/type/404").reply(404, {});

mock.onGet("https://pokeapi.co/api/v2/move/0").reply(200, Move);

mock
  .onGet("https://pokeapi.co/api/v2/pokemon-species/133")
  .reply(200, Missingno.species);

mock.onGet("https://pokeapi.co/api/v2/pokemon-species/404").reply(404, {});

mock
  .onGet("https://pokeapi.co/api/v2/evolution-chain/1")
  .reply(200, Missingno.evolutions);
