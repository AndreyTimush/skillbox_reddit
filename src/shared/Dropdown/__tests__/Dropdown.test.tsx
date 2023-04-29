/**
 * @jest-environment jsdom
 */
import { shallow } from "enzyme";
import React from "react";
import { Dropdown } from "../Dropdown";

const enzyme = require("enzyme");
const Adapter = require("@wojtekmaj/enzyme-adapter-react-17");
enzyme.configure({ adapter: new Adapter() });
describe("Dropdown", () => {
  test("should render", () => {
    // Enzyme.configure({ adapter: new Adapter() });
    const wrapper = shallow(
      <Dropdown children={<div />} button={<button />} />
    );
    expect(wrapper).toBeDefined();
    expect(wrapper.find("div.container").isEmptyRender()).toBeFalsy();
  });

  test("should render (snapshot)", () => {
    const wrapper = shallow(
      <Dropdown children={<div />} button={<button />} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});