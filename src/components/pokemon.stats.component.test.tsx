import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import * as React from 'react';
import Missingno from 'src/mocks/missingno.json';
import PokemonStats from './pokemon.stats.component';


Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const props = {
    stats:  Missingno.stats,
  }

  const enzymeWrapper = shallow(<PokemonStats {...props} />)

  const stats = enzymeWrapper.find('.stats')
  expect(stats.find('.stat').length).toEqual(2)
  expect(stats.first().text()).toEqual('speed: 70 speed 2: 72 ')
});