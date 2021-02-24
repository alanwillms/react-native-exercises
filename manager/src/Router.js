import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import EmployeeList from './components/EmployeeList';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{paddingTop: 65}}>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>
        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => Actions.employeeCreate()}
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            initial
          />

          <Scene
            key="employeeCreate"
            title="Create Employee"
            component={EmployeeCreate}
          />

          <Scene
            key="employeeEdit"
            title="Edit Employee"
            component={EmployeeEdit}
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
