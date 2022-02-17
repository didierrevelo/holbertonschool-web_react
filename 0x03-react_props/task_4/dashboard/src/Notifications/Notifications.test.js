import { shallow } from "enzyme";
import React from "react";
import NotificationItem from "./NotificationItem";
import Notifications from "./Notifications";

describe("<Notifications />", () => {
  it("Notifications renders without crashing", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("Notifications renders Notification Item and first item has correct html", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    wrapper.update();
    const listItems = wrapper.find("NotificationItem");
    expect(listItems).toBeDefined();
    expect(listItems.first().html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
  });
  it("check that the menu item is being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("div.menuItem")).toHaveLength(1);
  });
  it("check that the div.Notifications is not being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("div.Notifications")).toHaveLength(0);
  });
  it("menu item is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    wrapper.update();
    const item = wrapper.find("div.menuItem");
    expect(item).toHaveLength(1);
  });
  it("div.Notifications is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    wrapper.update();
    const item = wrapper.find("div.Notifications");
    expect(item).toHaveLength(1);
  });
});
