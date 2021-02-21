import {
  ActionTypes,
  EMAIL_CHANGED,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  PASSWORD_CHANGED,
} from '../actions/types';

interface AuthReducerState {
  email: string;
  password: string;
  user: any | null;
  error: string;
  loading: boolean;
}

const initialState: AuthReducerState = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false,
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
      return {...state, error: '', user: payload, loading: false};
    case LOGIN_USER_FAIL:
      return {...state, error: 'Authentication failed', loading: false};
    case LOGIN_USER:
      return {...state, loading: true};
    default:
      return state;
  }
};
