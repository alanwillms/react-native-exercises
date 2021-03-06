export const EMAIL_CHANGED = 'EMAIL_CHANGED';
export const PASSWORD_CHANGED = 'PASSWORD_CHANGED';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';
export const LOGIN_USER = 'LOGIN_USER';

export const EMPLOYEE_UPDATE = 'EMPLOYEE_UPDATE';
export const EMPLOYEE_CREATE = 'EMPLOYEE_CREATE';
export const EMPLOYEES_FETCH_SUCCESS = 'EMPLOYEES_FETCH_SUCCESS';
export const EMPLOYEES_SAVE_SUCCESS = 'EMPLOYEES_SAVE_SUCCESS';

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

interface LoginUserFailAction {
  type: typeof LOGIN_USER_FAIL;
  payload: undefined;
}

interface LoginUserAction {
  type: typeof LOGIN_USER;
  payload: undefined;
}

export type ActionTypes =
  | EmailChangedAction
  | PasswordChangedAction
  | LoginUserSuccessAction
  | LoginUserFailAction
  | LoginUserAction;
