import React from 'react';
import logo from './logo.svg';
import './App.css';


import PrivateRoute from './components/PrivateRoute';
import {BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

// Business Auth 
import BusinessLogin from './components/auth/bussiness_users/BusinessLogin'
import BusinessRegister from './components/auth/bussiness_users/BusinessRegister'

// Customer Auth
import CustomerLogin from './components/auth/customers/CustomerLogin'
import CustomerRegistration from './components/auth/customers/CustomerRegistration'


function App() {
  return (
    <Router>
    <div className="App">
      {/* Links */}



      {/* Routes: */}
<Switch>
  <Route exact path='/'>
    <Redirect to='/customer/login'/>
  </Route>

  <Route exact path='/business/login'>
    <BusinessLogin />
  </Route>
  <Route exact path='/business/register'>
    <BusinessRegister />
  </Route>

  <Route exact path='/customer/login'>
    <CustomerLogin />
  </Route>

  <Route exact path='/customer/register'>
    <CustomerRegistration />
  </Route>
<PrivateRoute exact path='/protectedClient' />

<PrivateRoute exact path='/protectedBusiness' />

</Switch>
    </div>
    </Router>
  );
}

export default App;
