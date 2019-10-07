import React from 'react';
import FetchApi from './Fetch';

import '../all.css';

const API = 'https://rickandmortyapi.com/api/character/';
const defaultQuery = '?name=dr&gender=female';

class ButtonItem extends React.Component{

    handleClick() {
      this.fetchFunction();

  }

  fetchFunction() {
    fetch(API + defaultQuery)
      .then(
         (response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error ('Something went wrong ...');
        }
      })
    //  .then(response => {response.json()})
      .then(parsedJSON => this.setState( {results: parsedJSON.results}))
      //.then(api => this.setState({ results: api.results }))
      .catch(error => this.setState({ error }));
  }


 render(){
     return <button className="myButton" onClick={this.handleClick.bind(this)} > fetch </button>;
 }

}

export default ButtonItem
