import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Components/TopMenu/TopMenu';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="_013">
       		<TopMenu/>
			<Header/>   
			<Content tieude="Ảnh 01" vitri1="order-lg-1" vitri2="order-lg-2"/>
			<Content tieude="Ảnh 02" vitri2="order-lg-1" vitri1="order-lg-2"/>
			<Footer/>
      </div>
    );
  }
}

export default App;
