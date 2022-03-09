const { fromJS } = require('immutable');

module.exports = function getImmutableObject(object) {
  return fromJS(object);
};
