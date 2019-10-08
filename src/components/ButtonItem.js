import React from 'react';
import FetchApi from './Fetch';

import '../all.css';

const API = 'https://rickandmortyapi.com/api/character/';
const dr = '?name=dr';
const drFemale = '?name=dr&gender=female';
const drMale = '?name=dr&gender=male';

class ButtonItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      name: [],
      error: null
    }

  }
  handleClick() {
    this.fetchFunction();
  }



  fetchFunction() {
    fetch(API + drFemale)
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong ...');
          }
        })
      //  .then(response => {response.json()})
      .then(parsedJSON => this.setState({
        results: parsedJSON.results,
        name: parsedJSON.results.name
      }))
      //.then(api => this.setState({ results: api.results }))
      .catch(error => this.setState({
        error
      }));
  }

  componentDidMount() {
    this.fetchFunction();
  }

  render() {
    const {results, name, error} = this.state;

    if (error) {
      return <p> { error.message } </p>;
    } else {

      return(
          <ul>
          {this.state.results.map(result => (
            <li key={result.id}>
            <button className = "myButton" onClick = { this.handleClick.bind(this) } > { result.name } < /button>;
            </li>
              ))}
          </ul>
      )
    }

  }
}
export default ButtonItem
