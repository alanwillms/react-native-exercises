import {EMPLOYEE_UPDATE} from '../actions/types';

const initialState = {
  name: '',
  phone: '',
  shift: '',
};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case EMPLOYEE_UPDATE:
      return {...state, [payload.prop]: payload.value};
    default:
      return state;
  }
};
