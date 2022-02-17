import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe('<CourseList />', () => {
  it("renders CourseList component without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("Check that it renders the 5 different rows", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find("CourseListRow")).toHaveLength(5);
  });
});
