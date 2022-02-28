import { shallow } from "enzyme";
import React from "react";
import Header from "./Header";

describe("<Header />", () => {
  it("Header renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("Verify that the components render img tag", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("div.header img").exists()).toEqual(true);
  });
  it("Verify that the components render h1 tag", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find("div.header h1").exists()).toEqual(true);
  });
});
