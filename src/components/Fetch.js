import React from 'react';

const API = 'https://rickandmortyapi.com/api/character/';
const defaultQuery = '?name=dr&gender=';


class FetchApi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    fetch(API + defaultQuery)
      .then(response => response.json())
      .then(data => this.setState({ results: data.results }))

  }
render() {
  const { results } = this.state;

  return (
    <ul>
      {results.map(point =>
        <li key={point.id}>
          <a href={point.image}>{point.name}</a>
        </li>
      )}
    </ul>
  );
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
