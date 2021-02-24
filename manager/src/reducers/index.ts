import {combineReducers} from 'redux';
import AuthReducer, {AuthReducerState} from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export interface RootState {
  auth: AuthReducerState;
  employeeForm: any;
  employees: any;
}

export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer,
  employees: EmployeeReducer,
});
