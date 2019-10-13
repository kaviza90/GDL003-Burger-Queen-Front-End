import React from 'react';

import ContainerOne from './ContainerOne';
import '../all.css';

const API = 'https://tlakuali-app.herokuapp.com/products';
const dr = '?name=rick';

class ButtonItem extends React.Component {
    types = ["Entry", "Main Dish", "Dessert", "Drinks"];

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
       const productsType = this.state.results.filter((product) => (type === product.category) );
    /*   const arrayOfProducts = productsType.forEach(function(element) {
         console.log("nombre: " + element.name + " location: " + element.location.name);
        })
       console.log(productsType); */
      this.props.setItems(productsType);
  }


  fetchFunction() {
    fetch(API)
      .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong ...');
          }
        })
      //  .then(response => {response.json()})
      .then(parsedJSON => this.setState({
        results: parsedJSON

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
                  () => this.handleClick(type) } > { type } { this.category }
                </button>
              </li>
            ))}
          </ul>
        </div>
      )

    }
  }


}
export default ButtonItem;
