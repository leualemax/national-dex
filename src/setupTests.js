/* istanbul ignore file */
import axios from 'axios';
import * as Missingno from 'src/mocks/missingno.json';
import MockAdapter from 'axios-mock-adapter';

global.XMLHttpRequest = undefined;

const mock = new MockAdapter(axios);
mock.onGet('https://pokeapi.co/api/v2/pokemon/0').reply(200, Missingno);
