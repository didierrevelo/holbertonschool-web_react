import { fromJS } from 'immutable';

function accessImmutableObject(object, array) {
  const mapped = fromJS(object);
  return mapped.getIn(array, undefined);
}

export default accessImmutableObject;
