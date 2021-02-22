import {combineReducers} from 'redux';
import AuthReducer, {AuthReducerState} from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

export interface RootState {
  auth: AuthReducerState;
  employeeForm: any;
}

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer,
});
