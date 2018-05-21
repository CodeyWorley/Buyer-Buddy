import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer class="page-footer">
        <div class="container">
          <div class="row">
            <div class="col l6 s12">
              <h5 class="white-text">BuyerBuddy</h5>
              <p class="grey-text text-lighten-4">Your AMS buddy</p>
            </div>
            <div class="col l4 offset-l2 s12">
              <h5 class="white-text">Links</h5>
              <ul>
                <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container">
          © 2018 Copyright BuyerBuddy
          <a class="grey-text text-lighten-4 right" href="#!"></a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
