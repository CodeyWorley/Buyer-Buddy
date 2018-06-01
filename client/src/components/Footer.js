import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">BuyerBuddy</h5>
              <p className="grey-text text-lighten-4">Because buying should be easy!</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="/">Amazon Seller Central</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div style={{textAlign: 'center'}} className="container">
          © 2018 Copyright BuyerBuddy
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
