import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import * as React from 'react';
import * as Missingno from 'src/mocks/missingno.json'
import { App, mapDispatchToProps, mapStateToProps} from './app.component';
import Filters from './filters.component';

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const props = {
    dex: {
      selected: Missingno,
      list: []
    },
    fetchPokemon: jest.fn(),
    fetchPokemons: jest.fn(),
    fetchTypes: jest.fn(),
    fetchMove: jest.fn(),
    filterPokemons: jest.fn(),
    selectPokemonByName: jest.fn(),
  }
  const enzymeWrapper = shallow(<App {...props} />)

  const div = enzymeWrapper.find('div').first();
  expect(div.hasClass('App')).toBe(true);
});


it('should trigger change type with a type', () => {
  const props = {
    dex: {
      selected: Missingno,
      list: []
    },
    fetchPokemon: jest.fn(),
    fetchPokemons: jest.fn(),
    fetchTypes: jest.fn(),
    fetchMove: jest.fn(),
    filterPokemons: jest.fn(),
    selectPokemonByName: jest.fn(),
  }
  const enzymeWrapper = shallow(<App {...props} />)
  
  const div = enzymeWrapper.find('div').first();
  const f:any = div.find("Filters").props();
  f.onChangeType({ target: { value: "133" }});

  expect(props.fetchTypes).toBeCalledWith("133");
});

it('should trigger change type with a select', () => {
  const props = {
    dex: {
      selected: Missingno,
      list: []
    },
    fetchPokemon: jest.fn(),
    fetchPokemons: jest.fn(),
    fetchTypes: jest.fn(),
    fetchMove: jest.fn(),
    filterPokemons: jest.fn(),
    selectPokemonByName: jest.fn(),
  }
  const enzymeWrapper = shallow(<App {...props} />)
  
  const div = enzymeWrapper.find('div').first();
  const f:any = div.find("Filters").props();
  f.onChangeType({ target: { value: "select" }});

  expect(props.fetchPokemons).toBeCalledTimes(2);
});


it('test mapStateToProps', () => {
  expect(mapStateToProps({
     dex: {
      selected: Missingno,
      list: []
     },
     pokemon: Missingno
  }).dex).toEqual({
    selected: Missingno,
    list: []
  });
});

it('test mapDispatchToProps', () => {
  const dispatch = jest.fn();
  mapDispatchToProps(dispatch).fetchMove();
  expect(dispatch).toBeCalledWith({"type": "CLEAN_MOVE"});
});
