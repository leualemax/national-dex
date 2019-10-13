import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import * as React from 'react';
import Missingno from 'src/mocks/missingno.json';
import Pokemon from './pokemon.component';


Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const props = {
    selected:  Missingno,
    changeMove: jest.fn(),
    loadEvolution: jest.fn()
  }

  const enzymeWrapper = shallow(<Pokemon {...props} />)

  const pokemon = enzymeWrapper.find('.pokemon')
  expect(pokemon.find('h3').text()).toEqual(`${Missingno.id} - ${Missingno.name}`)
  expect(pokemon.find('img').props().src).toEqual(Missingno.sprites.front_default)

});

it('renders with description', () => {
  const props = {
    selected:  { 
      ...Missingno,
      description: "日なたで　昼寝を　する　姿を　見かける。↵太陽の　光を"
    },
    changeMove: jest.fn(),
    loadEvolution: jest.fn()
  }

  const enzymeWrapper = shallow(<Pokemon {...props} />)

  const pokemon = enzymeWrapper.find('.pokemon')
  expect(pokemon.find('h3').text()).toEqual(`${Missingno.id} - ${Missingno.name}`)
  expect(pokemon.find('img').props().src).toEqual(Missingno.sprites.front_default)
  expect(pokemon.find('.description').text()).toEqual("日なたで　昼寝を　する　姿を　見かける。↵太陽の　光を")
});
