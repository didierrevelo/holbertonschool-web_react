import { fromJS } from 'immutable';

function accessImmutableObject(object, array) {
  return array.reduce((acc, key) => acc.get(key), fromJS(object));
}

export default accessImmutableObject;
