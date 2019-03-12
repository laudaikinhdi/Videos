import React from 'react';
import {Card, CardSection, Button, Confirm} from './common';
import {connect} from 'react-redux';
import {employeeUpdate, employeeSave, employeeDelete} from './../actions';
import EmployeeForm from "./EmployeeForm";
import _ from 'lodash';
import Communications from 'react-native-communications';

class EmployeeEdit extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showModal: false
        }
    }

    componentWillMount(){
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({prop, value});
        });
    }

    onButtonPress = () => {
        const {name, phone, shift} = this.props;
        this.props.employeeSave({name, phone, shift, uid:this.props.employee.id})
    }

    onTextPress = () => {
        const {phone, shift} = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onDecline = () => {
        this.setState({showModal: false});
    }

    onAccept = () => {
        this.props.employeeDelete({uid: this.props.employee.uid})
    }

    render(){
        return (
            <Card>
                <EmployeeForm {...this.props}/>
                <CardSection>
                    <Button onPress={() => this.onButtonPress()}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.onTextPress()}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({showModal: !this.state.showModal})}>
                        Fire Employee
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={() => this.onAccept()}
                    onDecline={() => this.onDecline()}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const {name, phone, shift} = state.employeeForm;

    return {
        name, phone, shift
    };
}

export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);