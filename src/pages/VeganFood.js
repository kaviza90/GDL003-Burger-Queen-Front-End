import React from 'react';
import ButtonItem from '../components/ButtonItem';
import ContainerOne from '../components/ContainerOne';
import ButtonItemTwo from '../components/ButtonItemTwo';
import Item from '../components/Item';

import '../all.css';


class VeganFood extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      results: [ ],
      order: []
    };
    this.handleClick = this.handleClick.bind(this);


  //  this.setItems = this.setItems.bind(this);
};

setItems = (results)=> {
    this.setState({
      results: results
    })
}


handleClick(result){
    const { results } = this.state.results;

    const product = result.name;

    const order = [];
      const productSelected = order.push(product);

    this.setState({
      order: product
    })
    console.log({order});
    console.log(product);
}

  componentDidMount() {
    const { results } = this.state;
    console.log({results});
  }


  render(){
    return(
      <div className="App">
        <header className="App-header">
          <h3 className="Logo">TLAKUALI</h3>

        </header>

        <div>
            <div className="title-Menu">
              <p>Menú</p>
              <nav className="Nav">
                 <ButtonItem
                  setItems= { this.setItems }/>
              </nav>
            </div>


          <div className="itemsSubmenu">
            <ul className="submenu">
              {this.state.results.map((result, index)=> (
                  <li key={index}>
                      <button className="buttonsSubmenu myButton myButtonTwo"
                          onClick={ () => this.handleClick(result)}>
                          {result.name} ${result.price}
                      </button>
                    </li>
                  )
                )
              }
            </ul>
          </div>


          <div className="order Cont2">
              <h1>VeganFood</h1>
              <div className="orderForm">
                  <p className="form">MESA</p>
                  <p>Ticket</p>

              </div>
              <div className="orderList">
                <p>orden {this.state.order} </p>

              </div>

          </div>

        </div>
      </div>


    )
  }
}




export default VeganFood;
