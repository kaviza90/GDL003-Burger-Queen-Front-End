import React from 'react';

import ContainerOne from './ContainerOne';
import '../all.css';

const API = 'https://rickandmortyapi.com/api/character/';
const dr = '?name=rick';

class ButtonItem extends React.Component {
    types = ["Alive", "Dead", "unknown"];

    constructor(props) {
    super(props);
    this.state = {
      results: [],
      namesOfProducts: [],
      error: null,
      products: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(type) {
       const productsType = this.state.results.filter((product) => (type === product.status) );
       const arrayOfProducts = productsType.forEach(function(element) {
         console.log("nombre: " + element.name + " location: " + element.location.name);
        })
       console.log(productsType);
      this.props.setItems(productsType);
  }


  fetchFunction() {
    fetch(API + dr)
      .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong ...');
          }
        })
      //  .then(response => {response.json()})
      .then(parsedJSON => this.setState({
        results: parsedJSON.results
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
    const {results, error} = this.state;

    if (error) {
      return <p> { error.message } </p>;
    } else {

      return(
        <div>
          <ul>
            {this.types.map((type, index)=> (
              <li key={index}>
                <button className = "myButton" onClick = {
                  () => this.handleClick(type) } > { type } { this.location }
                < /button>
              </li>
            ))}
          </ul>
        </div>
      )

    }
  }


}
export default ButtonItem
