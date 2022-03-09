const { fromJS } = require('immutable');

module.exports = function accessImmutableObject(object, array) {
  return array.reduce((acc, key) => acc.get(key), fromJS(object));
};
