import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import VeganFood from './pages/VeganFood';
//import FetchApi from './components/Fetch';


function App() {
  return (
    <HashRouter>
         <Switch>
            <Route exact path="/" component={VeganFood}/>
        </Switch>
        </HashRouter>
  );
}
export default App;
