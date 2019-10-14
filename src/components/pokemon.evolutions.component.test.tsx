import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import * as React from 'react';

import Eeveeolution from 'src/mocks/eeveeolution.json';
import Evolutions from 'src/mocks/evolutions.json';

import PokemonEvolutions from './pokemon.evolutions.component';


Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const props = {
    onChange: jest.fn(), 
    evolutions:  Evolutions.chain,
  }

  const enzymeWrapper = shallow(<PokemonEvolutions {...props} />)

  const evolutions = enzymeWrapper.find('.evolutions')
  expect(evolutions.find('ul')).toHaveLength(4);
  expect(evolutions.find('li')).toHaveLength(3);
  expect(evolutions.text()).toEqual("bulbasaurivysaurvenusaur");
});


it('renders evolutions in a single filo', () => {
  const props = {
    onChange: jest.fn(),
    evolutions:  Eeveeolution.chain,
  }

  const enzymeWrapper = shallow(<PokemonEvolutions {...props} />)

  const evolutions = enzymeWrapper.find('.evolutions')
  expect(evolutions.find('ul')).toHaveLength(3);
  expect(evolutions.find('li')).toHaveLength(9);
  expect(evolutions.text()).toEqual("eeveevaporeonjolteonflareonespeonumbreonleafeonglaceonsylveon");
});


it('renders evolutions in and select one', () => {
  const props = {
    onChange: jest.fn(),
    evolutions:  Eeveeolution.chain,
  }

  const enzymeWrapper = shallow(<PokemonEvolutions {...props} />)

  const evolutions = enzymeWrapper.find('.evolutions')
  expect(evolutions.find('ul')).toHaveLength(3);
  expect(evolutions.find('li')).toHaveLength(9);

  evolutions.find('button').first().simulate('click', { target: { value: 'select' }});
  expect(props.onChange).toBeCalledWith("select")
  expect(evolutions.text()).toEqual("eeveevaporeonjolteonflareonespeonumbreonleafeonglaceonsylveon");
});


it('renders evolutions in a single filo', () => {
  const props = {
    onChange: jest.fn(),
    evolutions:  {
      evolves_to: [],
      species: {
        url: 'http://test',
        name: "test"
      }
    },
  }

  const enzymeWrapper = shallow(<PokemonEvolutions {...props} />)

  const evolutions = enzymeWrapper.find('.evolutions')
  expect(evolutions.find('ul')).toHaveLength(2);
  expect(evolutions.find('li')).toHaveLength(1);
  expect(evolutions.text()).toEqual("test");
});