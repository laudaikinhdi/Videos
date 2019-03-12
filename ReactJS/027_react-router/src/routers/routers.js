import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import News from './../components/frontend/News';
import Content from './../components/layouts/Content';
import NewDetail from './../components/frontend/NewDetail';
import Contact from './../components/frontend/Contact';

export default class Routers extends Component{
    render(){
        return(
            <div>
                {/* <Route exact path="*" component="<h1>Page Not Found</h1>"/> */}
                <Route exact path="/" component={Content} />
                <Route exact path="/news" component={News} />
                <Route exact path="/news-detail/:slug.:id.html" component={NewDetail} />
                <Route exact path="/contact" component={Contact}/>
            </div>
        );
    }
}