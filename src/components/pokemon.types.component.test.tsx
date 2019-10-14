import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import * as React from 'react';
import Missingno from 'src/mocks/missingno.json';
import PokemonTypes from './pokemon.types.component';


Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const props = {
    types:  Missingno.types,
    onChange: jest.fn()
  }

  const enzymeWrapper = shallow(<PokemonTypes {...props} />)

  const types = enzymeWrapper.find('.types')
  expect(types.find('.type').length).toEqual(2)
  expect(types.first().text()).toEqual('metalgrass')
});