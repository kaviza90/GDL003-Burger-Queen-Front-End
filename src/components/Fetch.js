import React from 'react';
import ButtonItem from './ButtonItem'


const API = 'https://rickandmortyapi.com/api/character/';
const defaultQuery = '?name=dr&gender=female';



class FetchApi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      name: [],
      error: null,
    };
    this.myfunction = this.myfunction.bind(this);

  }

  myfunction() {
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


  componentDidMount() {
    this.myfunction();
  }


render() {
  const { results, error } = this.state;

  if (error) {
    return <p>{error.message}</p>;
  } else {


  return (
    <ul>
      {this.state.results.map(result => (
        <li key={result.id}>
          <ButtonItem  />

        </li>
      ))}
    </ul>
  );
}

}
}

export default FetchApi;

/*
export default class FetchApi extends React.Component {

    state = {
        loading: true,
        name: null,
    }

async componentDidMount() {
const url = 'https://rickandmortyapi.com/api/character/';
const response = await fetch(url);
const data = await response.json();
this.setState({name: data.results[0], loading: false });
console.log(data.results[0]);
    }

    render() {
if (this.state.loading) {
    return <div>loading...</div>
}

if (!this.state.name)
return <div>No es un nombre</div>

 return (
<div>
    <div>
    <div>
        <div>{this.state.name}</div>
    </div>
    )}
    </div>
        );
    }
}
*/
