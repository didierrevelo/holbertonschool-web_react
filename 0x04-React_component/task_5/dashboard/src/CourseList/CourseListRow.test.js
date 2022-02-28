import { shallow } from "enzyme";
import React from "react";
import CourseListRow from "./CourseListRow";

describe("<CourseListRow />", () => {
  it("CourseListRow renders without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("When isHeader is true renders one cell with colspan = 2 when textSecondCell does not exist", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="test" />
    );
    wrapper.update();

    expect(wrapper.find("th")).toHaveLength(1);
    expect(wrapper.find("th").prop("colSpan")).toEqual("2");
  });
  it('test the component renders two cells when textSecondCell is present', () =>{
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test2" />);
    wrapper.update();

    expect(wrapper.find("th")).toHaveLength(2);
    expect(wrapper.find("th").first().text()).toEqual("test");
    expect(wrapper.find("th").at(1).text()).toEqual("test2");
  })
  it('test the component renders correctly two td elements within a tr element', () =>{
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="test" textSecondCell="test2" />);
    wrapper.update();

    expect(wrapper.find("tr")).toHaveLength(1);
    expect(wrapper.find("tr").children("td")).toHaveLength(2);
  });
});
