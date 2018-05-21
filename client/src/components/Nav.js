import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">BuyerBuddy</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="collapsible.html">Stuff</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
