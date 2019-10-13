import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import * as React from 'react';

import Eeveeolution from 'src/mocks/eeveeolution.json';
import Evolutions from 'src/mocks/evolutions.json';

import PokemonEvolutions from './pokemon.evolutions.component';


Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const props = {
    evolutions:  Evolutions.chain,
  }

  const enzymeWrapper = shallow(<PokemonEvolutions {...props} />)

  const evolutions = enzymeWrapper.find('.evolutions')
  expect(evolutions.find('ul')).toHaveLength(3);
  expect(evolutions.find('li')).toHaveLength(3);
  expect(evolutions.text()).toEqual("bulbasaurivysaurvenusaur");
});


it('renders evolutions in a single filo', () => {
  const props = {
    evolutions:  Eeveeolution.chain,
  }

  const enzymeWrapper = shallow(<PokemonEvolutions {...props} />)

  const evolutions = enzymeWrapper.find('.evolutions')
  expect(evolutions.find('ul')).toHaveLength(2);
  expect(evolutions.find('li')).toHaveLength(9);
  expect(evolutions.text()).toEqual("eeveevaporeonjolteonflareonespeonumbreonleafeonglaceonsylveon");
});


it('renders evolutions in a single filo', () => {
  const props = {
    evolutions:  {
      evolves_to: [],
      species: {
        name: "test"
      }
    },
  }

  const enzymeWrapper = shallow(<PokemonEvolutions {...props} />)

  const evolutions = enzymeWrapper.find('.evolutions')
  expect(evolutions.find('ul')).toHaveLength(1);
  expect(evolutions.find('li')).toHaveLength(1);
  expect(evolutions.text()).toEqual("test");
});