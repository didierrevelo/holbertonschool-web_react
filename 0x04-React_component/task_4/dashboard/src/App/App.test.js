import { shallow } from "enzyme";
import React from "react";
import App from "./App";

describe("<App />", () => {
  it("App renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("It should contain the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Notifications").length).toEqual(1);
  });
  it("It should contain the Header component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Header")).toHaveLength(1);
  });
  it("It should contain the Login component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Login")).toHaveLength(1);
  });
  it("It should contain the Footer component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Footer")).toHaveLength(1);
  });
  it("check that CourseList is not displayed", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });
  it("isLoggedIn is true", () => {
    const wrapper = shallow(<App isLoggedIn />)
    expect(wrapper.find("login")).toHaveLength(0);
    expect(wrapper.find("CourseList")).toHaveLength(1);
  });
  it("when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out", () => {
    const events = {};
    const logout = jest.fn();

    document.addEventListener = jest.fn((event, cb) => {
      events[event] = cb;
    });

    window.alert = jest.fn();

    shallow(<App logOut={logout} />);

    events.keydown({ key: "h", ctrlKey: true });

    expect(window.alert).toHaveBeenCalledWith("Logging you out");
    expect(logout).toHaveBeenCalled();

    jest.restoreAllMocks();
  });
});
