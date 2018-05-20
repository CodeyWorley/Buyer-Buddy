import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

// Component Imports
import Listings from './Listings';
const Nav = () => <h2>Navbar</h2>
const Footer = () => <h2>Footer</h2>
const Dashboard = () => <h2>Dashboard</h2>
const Landing = () => <h2>Landing</h2>

// App paths
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Nav />
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard" component={Listings} />
          <Footer />
        </div>
      </BrowserRouter>
     </div>
  );
}

export default App;
