import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_SAVE_SUCCESS,
} from '../actions/types';

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
    case EMPLOYEE_CREATE:
      return initialState;
    case EMPLOYEES_SAVE_SUCCESS:
      return initialState;
    default:
      return state;
  }
};
