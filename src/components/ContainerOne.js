import React from 'react';
import VeganFood from '../pages/VeganFood';
import ButtonItem from './ButtonItem';
import '../all.css';


class ContainerOne extends React.Component{


  constructor() {
    super();
    this.state = {
      results: []
    };
  }


handleClick(){

}


componentDidMount() {
  const { products } = this.state;
  this.setState({ results: ButtonItem.results });
}



 render(){

    return(
      <div>
        <div className= "grid-container">
          <ul>
            {this.state.results.map((type, index)=> (
              <li key={index}>
                <button className = "myButton" onClick = {
                  () => this.handleClick(type) } > { type } { this.location }
                < /button>
              </li>
            ))}
          </ul>

        </div>
      </div>
     )
 }

}

export default ContainerOne;
