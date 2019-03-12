import React from 'react';

import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene 
                        key="login" 
                        component={LoginForm} 
                        title="Please Login" 
                        titleStyle={styles.titleCenterStyle} 
                    />
                </Scene>
                <Scene key="main">
                    <Scene 
                        rightTitle="Add"
                        onRight={() => Actions.employeeCreate()}
                        key="employeeList" 
                        component={EmployeeList} 
                        title="Employee List" 
                        titleStyle={styles.titleCenterStyle}     
                        initial
                    />
                    <Scene 
                        key="employeeCreate"
                        component={EmployeeCreate}
                        title="Employee Create"
                        titleStyle={styles.titleCenterStyle}     
                    />
                    <Scene
                        key="employeeEdit"
                        component={EmployeeEdit}
                        title="Edit Employee"
                        titleStyle={styles.titleCenterStyle}
                    />
                </Scene>
            </Scene>
        </Router>
    );
}

const styles = {
    titleCenterStyle: {
        flex: 1,
        textAlign: 'center'
    }
}

export default RouterComponent;