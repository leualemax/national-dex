import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-styled-components";
import * as React from "react";
import { Panel } from "./panel.component.style";

Enzyme.configure({ adapter: new Adapter() });

it("renders Panel with no params", () => {
	const enzymeWrapper = mount(<Panel />);
	expect(enzymeWrapper).toHaveStyleRule("background-color", "#cfc9c6");
	expect(enzymeWrapper).toHaveStyleRule("border-radius", "5px");
});

it("renders Panel with passed params and return defaul color", () => {
	const props = {
		theme: "othervalue",
		border: "20px"
	};

	const enzymeWrapper = mount(<Panel {...props} />);
	expect(enzymeWrapper).toHaveStyleRule("background-color", "#cfc9c6");
	expect(enzymeWrapper).toHaveStyleRule(
		"box-shadow",
		"inset -1px 2px rgba(255,255,255,0.6)"
	);
});

it("renders Panel with passed params and color type screen", () => {
	const enzymeWrapper = mount(<Panel theme='screen' />);
	expect(enzymeWrapper).toHaveStyleRule("background-color", "#32cb65");
	expect(enzymeWrapper).toHaveStyleRule(
		"box-shadow",
		"inset 0px 0px 0px 2px rgba(0,0,0,0.2)"
	);
});
