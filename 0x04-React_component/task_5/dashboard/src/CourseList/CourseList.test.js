import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe('<CourseList />', () => {
  let listCourses;
  it("renders CourseList component without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toEqual(true);
  });
  describe("CourseList with list of courses", () => {
    beforeEach(() => {
      listCourses = [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 },
      ];
    });

    it("it renders the 5 different rows", () => {
      const wrapper = shallow(<CourseList listCourses={listCourses} />);
      wrapper.update();

      expect(wrapper.find("CourseListRow")).toHaveLength(5);

      expect(wrapper.find("CourseListRow").at(0).prop("textFirstCell")).toEqual("Available courses");
      expect(wrapper.find("CourseListRow").at(0).prop("isHeader")).toEqual(true);

      expect(wrapper.find("CourseListRow").at(1).prop("textFirstCell")).toEqual("Course name");
      expect(wrapper.find("CourseListRow").at(1).prop("textSecondCell")).toEqual("Credit");
      expect(wrapper.find("CourseListRow").at(1).prop("isHeader")).toEqual(true);

      expect(wrapper.find("CourseListRow").at(2).prop("textFirstCell")).toEqual("ES6");
      expect(wrapper.find("CourseListRow").at(2).prop("textSecondCell")).toEqual(60);
      expect(wrapper.find("CourseListRow").at(2).prop("isHeader")).toEqual(false);

      expect(wrapper.find("CourseListRow").at(3).prop("textFirstCell")).toEqual("Webpack");
      expect(wrapper.find("CourseListRow").at(3).prop("textSecondCell")).toEqual(20);
      expect(wrapper.find("CourseListRow").at(3).prop("isHeader")).toEqual(false);

      expect(wrapper.find("CourseListRow").at(4).prop("textFirstCell")).toEqual("React");
      expect(wrapper.find("CourseListRow").at(4).prop("textSecondCell")).toEqual(40);
      expect(wrapper.find("CourseListRow").at(4).prop("isHeader")).toEqual(false);
      });
    });
    describe("CourseList without listCourses or empty listCourses", () => {
      beforeEach(() => {
        listCourses = [];
      });
  
      it("it renders the 3 rows without listCourses  without listCourses", () => {
        const wrapper = shallow(<CourseList />);
        expect(wrapper.exists());
        wrapper.update();
  
        expect(wrapper.find("CourseListRow")).toHaveLength(3);
        expect(wrapper.find("CourseListRow").at(0).prop("textFirstCell")).toEqual("Available courses");
        expect(wrapper.find("CourseListRow").at(0).prop("isHeader")).toEqual(true);
  
        expect(wrapper.find("CourseListRow").at(1).prop("textFirstCell")).toEqual("Course name");
        expect(wrapper.find("CourseListRow").at(1).prop("textSecondCell")).toEqual("Credit");
        expect(wrapper.find("CourseListRow").at(1).prop("isHeader")).toEqual(true);
  
        expect(wrapper.find("CourseListRow").at(2).prop("textFirstCell")).toEqual(
          "No course available yet"
        );
        expect(wrapper.find("CourseListRow").at(2).prop("textSecondCell")).toEqual(null);
        expect(wrapper.find("CourseListRow").at(2).prop("isHeader")).toEqual(false);
      });
  
      it("it renders the 3 rows with listCourses empty", () => {
        const wrapper = shallow(<CourseList listCourses={listCourses} />);
        expect(wrapper.exists());
        wrapper.update();
  
        expect(wrapper.find("CourseListRow")).toHaveLength(3);
        expect(wrapper.find("CourseListRow").at(0).prop("textFirstCell")).toEqual("Available courses");
        expect(wrapper.find("CourseListRow").at(0).prop("isHeader")).toEqual(true);
  
        expect(wrapper.find("CourseListRow").at(1).prop("textFirstCell")).toEqual("Course name");
        expect(wrapper.find("CourseListRow").at(1).prop("textSecondCell")).toEqual("Credit");
        expect(wrapper.find("CourseListRow").at(1).prop("isHeader")).toEqual(true);
  
        expect(wrapper.find("CourseListRow").at(2).prop("textFirstCell")).toEqual(
          "No course available yet"
        );
        expect(wrapper.find("CourseListRow").at(2).prop("textSecondCell")).toEqual(null);
        expect(wrapper.find("CourseListRow").at(2).prop("isHeader")).toEqual(false);
      });
    });
  });


