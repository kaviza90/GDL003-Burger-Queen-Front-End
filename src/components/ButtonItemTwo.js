import React from 'react';

import ContainerOne from './ContainerOne';
import '../all.css';



class ButtonItemTwo extends React.Component {


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



  componentDidMount() {

  }

  render() {
    const {results, error} = this.state;

    if (error) {
      return <p> { error.message } </p>;
    } else {

      return(
        <div className="itemsSubmenu">
          <ul>
            {this.state.results.map((result, index)=> (
                <li key={index}>
                    <button className="buttonsSubmenu myButton myButtonTwo"
                      onClick = { () => this.handleClick(result.name)} > {result.name}
                    </button>
                  </li>
                )
              )
            }
          </ul>
        </div>

      )

    }
  }




}
export default ButtonItemTwo;
