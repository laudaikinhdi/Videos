import React, { Component } from 'react';

export default class Footer extends Component{
    render(){
        return(
            <footer className="page-footer font-small cyan darken-3">
        {/* Footer Elements */}
        <div className="container">
          {/* Grid row*/}
          <div className="row">
            {/* Grid column */}
            <div className="col-md-12 py-5">
              <div className="mb-5 flex-center">
                {/* Facebook */}
                <a className="fb-ic">
                  <i className="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                {/* Twitter */}
                <a className="tw-ic">
                  <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                {/* Google +*/}
                <a className="gplus-ic">
                  <i className="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                {/*Linkedin */}
                <a className="li-ic">
                  <i className="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                {/*Instagram*/}
                <a className="ins-ic">
                  <i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                </a>
                {/*Pinterest*/}
                <a className="pin-ic">
                  <i className="fa fa-pinterest fa-lg white-text fa-2x"> </i>
                </a>
              </div>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row*/}
        </div>
        {/* Footer Elements */}
        {/* Copyright */}
        <div className="footer-copyright text-center py-3">© 2018 Copyright:
          <a href="https://mdbootstrap.com/bootstrap-tutorial/"> MDBootstrap.com</a>
        </div>
        {/* Copyright */}
      </footer>
        );
    }
}