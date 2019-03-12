import React from 'react';
import {
    Card,
    CardSection,
    Button,
} from './common';
import {employeeUpdate, employeeCreate} from './../actions';
import {connect} from 'react-redux';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends React.Component{

    onButtonPress = () => {
        const {name, phone, shift} = this.props;

        this.props.employeeCreate({name, phone, shift: shift || 'Monday'});
    }

    render(){
        return (
            <Card>
                <EmployeeForm {...this.props}/>
                <CardSection>
                    <Button onPress={() => this.onButtonPress()}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    const {name, phone, shift} = state.employeeForm
    return {
        name, phone, shift
    }
}

export default connect(mapStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);