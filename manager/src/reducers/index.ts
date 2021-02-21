import {combineReducers} from 'redux';
import AuthReducer, {AuthReducerState} from './AuthReducer';

export interface RootState {
  auth: AuthReducerState;
}

export default combineReducers({
  auth: AuthReducer,
});
