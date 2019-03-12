import React, { Component } from 'react';
import './App.css';
import NoiDung from './NoiDung';

class App extends Component {
  constructor(props){
	super(props);
	this.state = {
		trangThai: 0,
		ten:"ThanhTan"
	}
  }
  componentWillMount(){
	  console.log('ComponentWillMount chạy rồi 1 ');
  }
  componentDidMount(){
	  console.log('ComponentDidMount chạy rồi 3 ');
  }
  // state thay đổi
  shouldComponentUpdate(nextProps, nextState){
	console.log('shouldComponentUpdate chạy rồi ');
	return true;
  }
  componentWillUpdate(nextProps, nextState){
	console.log('componentWillUpdate chạy rồi ');
  }
  componentDidUpdate(prevProps, prevState){
	console.log('componentDidUpdate chạy rồi ');
  }
  capnhatState = () => {
	  this.setState({
		ten: "Trạng thái được cập nhật"
	  });
  }
  // end state thay đổi
  render() {
	  console.log('Hàm render đã chạy 2 ');
    return (
      <div className="App">
	  <NoiDung ten={this.state.ten}/>
        <button onClick={()=> this.capnhatState()}>Click update state</button>
      </div>
    );
  }
}

export default App;
