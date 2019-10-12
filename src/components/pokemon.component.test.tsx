import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import * as React from 'react';
import * as Missingno from 'src/mocks/missingno.json';
import Pokemon from './pokemon.component';


Enzyme.configure({ adapter: new Adapter() })

const setup = () => {
  const props = {
    selected:  Missingno
  }

  const enzymeWrapper = shallow(<Pokemon {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

it('renders without crashing', () => {
  const { enzymeWrapper } = setup()
  const pokemon = enzymeWrapper.find('.pokemon')
  expect(pokemon.find('h3').text()).toEqual(`${Missingno.id} - ${Missingno.name}`)
  expect(pokemon.find('img').props().src).toEqual(Missingno.sprites.front_default)
});
