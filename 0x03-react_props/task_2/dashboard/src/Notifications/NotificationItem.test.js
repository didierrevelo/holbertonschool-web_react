import { shallow } from "enzyme";
import React from "react";
import NotificationItem from "./NotificationItem";

describe("<NotificationsItem />", () => {
  it("rendering of the component works without crashing", () =>{
    const wrapper = shallow(<NotificationItem />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("Verify that by passing dummy type and value props, it renders the correct html", () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    wrapper.update();
    const Item = wrapper.find("li");

    expect(Item).toHaveLength(1);
    expect(Item.text()).toEqual("test");
    expect(wrapper.html()).toContain('<li data-notification-type="default"');
    expect(wrapper.html()).toContain('test</li>');
  });
    it("Passing a dummy html prop, it renders the correct html", () => {
    const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }}/>);
    expect(wrapper.html()).toContain('<u>test</u>');
    });
});
