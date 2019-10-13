import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import * as React from 'react';
import * as Missingno from 'src/mocks/missingno.json'
import { App, mapDispatchToProps, mapStateToProps} from './app.component';

Enzyme.configure({ adapter: new Adapter() })

const setup = () => {
  const props = {
    dex: {
      selected: Missingno
    },
    fetchPokemon: jest.fn(),
    fetchMove: jest.fn(),
    fetchEvolutions: jest.fn()
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
  expect(div.hasClass('App')).toBe(true);
});

it('test mapStateToProps', () => {
  expect(mapStateToProps({
     dex: {
      selected: Missingno
     },
     pokemon: Missingno
  }).dex).toEqual({
    selected: Missingno
  });
});

it('test mapDispatchToProps', () => {
  const dispatch = jest.fn();
  mapDispatchToProps(dispatch).fetchMove();
  expect(dispatch.mock.calls[0][0].type).toEqual('CLEAN_MOVE');
});
