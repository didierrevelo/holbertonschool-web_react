const { Map } = require('immutable');

module.exports = function getImmutableObject(object) {
  return Map(object);
};
