import { shallow } from "enzyme";
import React from "react";
import Footer from "./Footer";

describe("<Footer />", () => {
  it("Footer renders without crashing", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("Verify that the components at the very least render the text “Copyright”", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find("div.footer p").text()).toContain("Copyright");
  });
});
