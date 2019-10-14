import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import * as React from 'react';
import ListMock from 'src/mocks/list.json';
import List from './list.component';


Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const props = {
    list: ListMock.results,
    load: jest.fn()
  }

  const enzymeWrapper = shallow(<List {...props} />)

  const pokemon = enzymeWrapper.find('.list')
  expect(pokemon.find('ul').length).toEqual(1)
  expect(pokemon.find('li').length).toEqual(10)

  expect(props.load).not.toBeCalled()
});


it('select a pokemon and call with url', () => {
  const props = {
    list: ListMock.results,
    load: jest.fn()
  }

  const enzymeWrapper = shallow(<List {...props} />)

  const pokemon = enzymeWrapper.find('.list')
  expect(pokemon.find('ul').length).toEqual(1)
  expect(pokemon.find('li').length).toEqual(10)

  pokemon.find('button').first().simulate('click', { target: { value: 'https://pokeapi.co/api/v2/pokemon/0' }});
  
  expect(props.load).toBeCalledWith("https://pokeapi.co/api/v2/pokemon/0")
});
