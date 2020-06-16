import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from '../components/PrivateRoute';


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
