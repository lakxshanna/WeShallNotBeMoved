// src/App.js
import React from 'react';
import './App.css';
import InteractiveMap from './components/interactivemap';
import Landing from './components/landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>We Shall Not Be Moved - IN DEV</h1>
        
        {/* Define Routes */}
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/map" component={InteractiveMap} />
          {/* You can add more routes here as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

