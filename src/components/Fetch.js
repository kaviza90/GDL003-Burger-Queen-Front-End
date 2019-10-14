import React from 'react';
import ButtonItemTwo from './ButtonItemTwo';

const API = 'https://tlakuali-app.herokuapp.com/orders';



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
    fetch(API)
      .then(
         (response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error ('Something went wrong ...');
        }
      })
    //  .then(response => {response.json()})
      .then(parsedJSON => this.setState( {results: parsedJSON}))
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
  /*  <ul>
      {this.state..map(result => (
        <li key={result.id}>
          <ButtonItemTwo  />

        </li>
      ))}
    </ul>
    */

    <div>
      <button onClick = { () => console.log(this.state.results)}>fetch
      </button>
    </div>
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
