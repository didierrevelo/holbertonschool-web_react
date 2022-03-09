import { fromJS } from 'immutable';

function accessImmutableObject(object, array) {
  return array.reduce((acc, key) => acc.getIn(key), fromJS(object));
}

export default accessImmutableObject;
