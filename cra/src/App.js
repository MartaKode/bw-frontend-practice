import React from 'react';
import logo from './logo.svg';
import './App.css';


import PrivateRoute from './components/PrivateRoute';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      {/* Links */}



      {/* Routes: */}
<Switch>
<PrivateRoute exact path='/protectedClient' />

<PrivateRoute exact path='protectedBusiness' />

</Switch>
    </div>
    </Router>
  );
}

export default App;
