import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import * as React from 'react';
import * as Missingno from 'src/mocks/missingno.json'
import { App, mapDispatchToProps, mapStateToProps} from './App';

Enzyme.configure({ adapter: new Adapter() })

const setup = () => {
  const props = {
    dex: {
      pokemon: Missingno
    },
    fetchPokemon: jest.fn()
  }

  const enzymeWrapper = shallow(<App {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

it('renders without crashing', () => {
  const { enzymeWrapper } = setup()
  const div = enzymeWrapper.find('div');
  const pokemon = enzymeWrapper.find('div').find('Pokemon')
  expect(div.hasClass('App')).toBe(true)
  expect(pokemon.props().selected).toEqual(Missingno)
});

it('test mapStateToProps', () => {
  expect(mapStateToProps({
    pokemon: Missingno
  }).dex).toEqual({
    pokemon: Missingno
  });
});

it('test mapDispatchToProps', () => {
  const dispatch = jest.fn();
  mapDispatchToProps(dispatch).fetchPokemon(0);
  expect(dispatch.mock.calls[0][0].type).toEqual('FETCH_POKEMON');
});
