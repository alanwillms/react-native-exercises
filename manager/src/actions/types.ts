export const EMAIL_CHANGED = 'EMAIL_CHANGED';
export const PASSWORD_CHANGED = 'PASSWORD_CHANGED';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';

interface EmailChangedAction {
  type: typeof EMAIL_CHANGED;
  payload: string;
}

interface PasswordChangedAction {
  type: typeof PASSWORD_CHANGED;
  payload: string;
}

interface LoginUserSuccessAction {
  type: typeof LOGIN_USER_SUCCESS;
  payload: any;
}

export type ActionTypes =
  | EmailChangedAction
  | PasswordChangedAction
  | LoginUserSuccessAction;
