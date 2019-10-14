import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import * as React from 'react';
import Missingno from 'src/mocks/missingno.json';
import PokemonMoves from './pokemon.moves.component';


Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const props = {
    moves: Missingno.moves,
    effect: "",
    onChange: jest.fn()
  }

  const enzymeWrapper = shallow(<PokemonMoves {...props} />)

  const moves = enzymeWrapper.find('.moves')
  expect(moves.find('option').length).toEqual(2)
  expect(moves.first().text()).toEqual('Select Movelight-metal')
});

it('renders without moves', () => {
  const props = {
    moves: [],
    effect: "",
    onChange: jest.fn()
  }

  const enzymeWrapper = shallow(<PokemonMoves {...props} />)

  const moves = enzymeWrapper.find('.moves')
  expect(moves.find('option').length).toEqual(1)
  expect(moves.first().text()).toEqual('Select Move')
});


it('renders and simulate a change', () => {
  const props = {
    moves: Missingno.moves,
    effect: "",
    onChange: jest.fn()
  }

  const enzymeWrapper = shallow(<PokemonMoves {...props} />)

  const moves = enzymeWrapper.find('.moves')
  const select = moves.find('select');
  const option = moves.find('option').last();

  select.simulate('change', { target: { value: 'https://pokeapi.co/api/v2/move/0' }});
  
  expect(option.text()).toEqual("light-metal")
  expect(props.onChange).toBeCalledWith("https://pokeapi.co/api/v2/move/0")
});

it('renders and simulate a change to the placehold item', () => {
  const props = {
    moves: Missingno.moves,
    effect: "",
    onChange: jest.fn()
  }

  const enzymeWrapper = shallow(<PokemonMoves {...props} />)

  const moves = enzymeWrapper.find('.moves')
  const select = moves.find('select');
  const option = moves.find('option').last();

  select.simulate('change', { target: { value: 'select' }});
  
  expect(option.text()).toEqual("light-metal")
  expect(props.onChange).toBeCalledWith(undefined)
});