import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer class="page-footer blue darken-1">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5><a class="grey-text text-lighten-3" href="/">BuyerBuddy</a></h5>
                <p class="grey-text text-lighten-4">Because buying should be easy!</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 />
                <ul>
                  <li><a class="grey-text text-lighten-3" href="/">Seller Central</a></li>
                  <li><a class="grey-text text-lighten-3" href="/">RPI Consulting</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="center footer-copyright white-text">
            <div class="container">
            © 2018 Buyer buddy
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;
