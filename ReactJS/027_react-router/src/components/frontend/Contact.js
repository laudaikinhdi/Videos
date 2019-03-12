import React, { Component } from 'react';
import {
    Redirect,
  } from "react-router-dom";

export default class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            isRedirect: false,
            fName: '',
            fSelect: '2'
        }
    }
    submitForm = (event) => {
        event.preventDefault();
        this.setState({
            isRedirect: true
        });
        
    }
    isChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
        console.log(this.state.fSelect);
    }
    render() {
        if (this.state.isRedirect) {
            return <Redirect to="/" />;
        }
        return (
            <div className="col-md-4 offset-md-4">
                {/* Default form contact */}
                <form className="text-center border border-light p-5">
                <p className="h4 mb-4">Contact us</p>
                {/* Name */}
                <input type="text" name="fName" onChange={(event)=>this.isChange(event)} id="defaultContactFormName" className="form-control mb-4" placeholder="Name" />
                {/* Email */}
                <input type="email" name="email" onChange={(event)=>this.isChange(event)}  id="defaultContactFormEmail" className="form-control mb-4" placeholder="E-mail" />
                {/* Subject */}
                <label>Subject</label>
                <select value={this.state.fSelect} name="fSelect" onChange={(event)=>this.isChange(event)} className="browser-default custom-select mb-4">
                    <option  disabled>Choose option</option>
                    <option value="1" >Feedback</option>
                    <option value="2">Report a bug</option>
                    <option value="3">Feature request</option>
                    <option value="4">Feature request</option>
                </select>
                {/* Message */}
                <div className="form-group">
                    <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="Message"/>
                </div>
                {/* Copy */}
                <div className="custom-control custom-checkbox mb-4">
                    <input type="checkbox" className="custom-control-input" id="defaultContactFormCopy" />
                    <label className="custom-control-label" htmlFor="defaultContactFormCopy">Send me a copy of this message</label>
                </div>
                {/* Send button */}
                <button className="btn btn-info btn-block" onClick={(event)=>this.submitForm(event)} type="submit">Send</button>
                </form>
                {/* Default form contact */}
            </div>
        );
    }
}