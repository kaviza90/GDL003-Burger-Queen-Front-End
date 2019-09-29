import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import VeganFood from './pages/VeganFood';

function App() {
  return (
    <BrowserRouter>
         <Switch> 
            <Route exact path="/VeganFood" component={VeganFood}/>
        </Switch>
        </BrowserRouter>
  );
}

export default App;
