import React, { Component } from 'react';

export default class NoiDung extends Component {
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps chạy rồi ');
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate chạy rồi ');
        return true;
    }
    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate chạy rồi ');
    }
    componentDidUpdate(nextProps, nextState){
        console.log('componentDidUpdate chạy rồi ');
    }
    render() {
        console.log('render1 chạy rồi ');
        return (
            <div>
                <p>{this.props.ten}</p>
            </div>
        );
    }
}