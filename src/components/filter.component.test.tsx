import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import * as React from "react";
import ListMock from "src/mocks/list.json";
import Types from "src/mocks/types.json";
import Filters from "./filters.component";

Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const props = {
    list: ListMock.results,
    type: "select",
    types: Types.results,
    onFilter: jest.fn(),
    onFetch: jest.fn(),
    onChangeType: jest.fn()
  };

  const enzymeWrapper = shallow(<Filters {...props} />);

  const head = enzymeWrapper.find(".head");
  expect(head.find("select").length).toEqual(1);
  expect(head.find("option").length).toEqual(21);

  expect(props.onFilter.mock.calls[0]).toBeUndefined();
  expect(props.onFetch.mock.calls[0]).toBeUndefined();
  expect(props.onChangeType.mock.calls[0]).toBeUndefined();
});

it("should trigger only the change type event", () => {
  const props = {
    list: ListMock.results,
    type: "select",
    types: Types.results,
    onFilter: jest.fn(),
    onFetch: jest.fn(),
    onChangeType: jest.fn()
  };

  const enzymeWrapper = shallow(<Filters {...props} />);

  const head = enzymeWrapper.find(".head");
  expect(head.find("select").length).toEqual(1);
  expect(head.find("option").length).toEqual(21);

  head
    .find("select")
    .first()
    .simulate("change", { target: { value: "glass" } });

  expect(props.onFilter.mock.calls[0]).toBeUndefined();
  expect(props.onFetch.mock.calls[0]).toBeUndefined();
  expect(props.onChangeType.mock.calls[0][0]).toEqual({
    target: { value: "glass" }
  });
});

it("should trigger only the filter event with text", () => {
  const props = {
    list: ListMock.results,
    type: "select",
    types: Types.results,
    onFilter: jest.fn(),
    onFetch: jest.fn(),
    onChangeType: jest.fn()
  };

  const enzymeWrapper = shallow(<Filters {...props} />);

  const head = enzymeWrapper.find(".head");
  expect(head.find("select").length).toEqual(1);
  expect(head.find("option").length).toEqual(21);

  head
    .find('input[type="text"]')
    .first()
    .simulate("change", { target: { value: "bulbasaur" } });

  expect(props.onChangeType).not.toBeCalled();
  expect(props.onFetch).not.toBeCalled();
  expect(props.onFilter).toBeCalledWith("bulbasaur");
});

it("should trigger only the fetch event with number", () => {
  const props = {
    list: ListMock.results,
    type: "select",
    types: Types.results,
    onFilter: jest.fn(),
    onFetch: jest.fn(),
    onChangeType: jest.fn()
  };

  const enzymeWrapper = shallow(<Filters {...props} />);

  const head = enzymeWrapper.find(".head");
  expect(head.find("select").length).toEqual(1);
  expect(head.find("option").length).toEqual(21);

  head
    .find('input[type="number"]')
    .first()
    .simulate("change", { target: { value: "133" } });

  expect(props.onChangeType).not.toBeCalled();
  expect(props.onFilter).not.toBeCalled();
  expect(props.onFetch).toBeCalledWith("https://pokeapi.co/api/v2/pokemon/133");
});

it("should not trigger the fetch event with no number", () => {
  const props = {
    list: ListMock.results,
    type: "select",
    types: Types.results,
    onFilter: jest.fn(),
    onFetch: jest.fn(),
    onChangeType: jest.fn()
  };

  const enzymeWrapper = shallow(<Filters {...props} />);

  const head = enzymeWrapper.find(".head");
  expect(head.find("select").length).toEqual(1);
  expect(head.find("option").length).toEqual(21);

  head
    .find('input[type="number"]')
    .first()
    .simulate("change", { target: { value: "asd" } });

  expect(props.onChangeType).not.toBeCalled();
  expect(props.onFilter).not.toBeCalled();
  expect(props.onFetch).not.toBeCalled();
});
