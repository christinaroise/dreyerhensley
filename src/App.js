import React from 'react';
import { HashRouter, NavLink, Route} from "react-router-dom";
import "./firebase"
import './App.css';
import Studio from './Studio'
import Booking from './Booking'
import Admin from './Admin'
import CustomerDB from './components/CustomerDB'

const App = () => {
  return (
    <HashRouter basename="/">
      <header>
        <nav>
          <NavLink exact to="/" activeClassName="nav-link--active">Dreyer + Hensley</NavLink>
        </nav>
      <Route exact path="/" component={Studio} /> 
      <Route exact path="/booking" component={Booking} /> 
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/admin/kunder" component={CustomerDB}/> 
      </header>
    </HashRouter>
  );
}

export default App;
