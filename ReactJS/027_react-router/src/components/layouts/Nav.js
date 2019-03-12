import React, { Component } from 'react';
import {
  Link,
  NavLink
} from 'react-router-dom';

export default class Nav extends Component{
    render(){
        return (
          
            <nav className="navbar navbar-expand-lg navbar-dark primary-color">
        {/* Navbar brand */}
        <a className="navbar-brand" href="#">React-router</a>
        {/* Collapse button */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        {/* Collapsible content */}
        <div className="collapse navbar-collapse" id="basicExampleNav">
          {/* Links */}
          <ul className="navbar-nav mr-auto">
            <li className="nav-item" >
              <NavLink exact className="nav-link"  to="/">Trang chủ</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact className="nav-link"  to="/news">News</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            {/* Dropdown */}
          </ul>
          {/* Links */}
          <form className="form-inline">
            <div className="md-form my-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            </div>
          </form>
        </div>
        {/* Collapsible content */}
      </nav>
        );
    }
}