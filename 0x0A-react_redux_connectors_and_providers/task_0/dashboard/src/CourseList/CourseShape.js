import propTypes from "prop-types";

const CourseShape = propTypes.shape({
  id: propTypes.number,
  name: propTypes.string,
  credit: propTypes.number,
});

export default CourseShape;
