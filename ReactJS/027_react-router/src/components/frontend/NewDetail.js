import React, { Component } from 'react';
import data from './../../data.json';
export default class NewDetail extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
    }
    getDataById = data.filter((value) => {
        return value.id == this.props.match.params.id;
    });
    render() {
        console.log(this.getDataById);
       
        return (
            this.getDataById.map((data) => {
                return(
                    <div key={data.id} className="col-md-4 p-4 offset-md-4 text-justify">
                        <h3>{data.tieude}</h3>
                    </div>
                );
            })
           
        );
    }
}