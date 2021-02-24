import {EMPLOYEES_FETCH_SUCCESS} from '../actions/types';

const initialState = {};

export default (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case EMPLOYEES_FETCH_SUCCESS:
      const id = payload.uid;
      return {...state, [id]: payload};
    default:
      return state;
  }
};
