import {EMAIL_CHANGED, LOGIN_USER_SUCCESS, PASSWORD_CHANGED} from './types';
import firebase from 'firebase';

export const emailChanged = (text) => ({
  type: EMAIL_CHANGED,
  payload: text,
});

export const passwordChanged = (text) => ({
  type: PASSWORD_CHANGED,
  payload: text,
});

export const loginUser = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) =>
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: user,
        }),
      );
  };
};
