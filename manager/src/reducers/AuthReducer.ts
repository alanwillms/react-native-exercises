import {
  ActionTypes,
  EMAIL_CHANGED,
  LOGIN_USER_SUCCESS,
  PASSWORD_CHANGED,
} from '../actions/types';

interface AuthReducerState {
  email: string;
  password: string;
  user: any | null;
}

const initialState: AuthReducerState = {
  email: '',
  password: '',
  user: null,
};

export {AuthReducerState};

export default (state = initialState, action: ActionTypes) => {
  const {type, payload} = action;

  switch (type) {
    case EMAIL_CHANGED:
      return {...state, email: payload};
    case PASSWORD_CHANGED:
      return {...state, password: payload};
    case LOGIN_USER_SUCCESS:
      return {...state, user: payload};
    default:
      return state;
  }
};
