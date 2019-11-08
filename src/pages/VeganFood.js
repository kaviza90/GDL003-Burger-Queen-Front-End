import React from 'react';
import ButtonItem from '../components/ButtonItem';
import ContainerOne from '../components/ContainerOne';
import ButtonItemTwo from '../components/ButtonItemTwo';
import Item from '../components/Item';
import InputTable from '../components/Input';
import OrderForm from '../components/OrderForm';
import FetchApi from '../components/Fetch';

import '../all.css';


class VeganFood extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      results: [ ],
      order: [],
      prices: [],
      total: 0
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

  //  const price = parseInt(result.price);

    const { order } = this.state;
      const product = result.name + " " + "$" + result.price;

    const { prices } = this.state;
        const price = result.price;

    const { total } = this.state;
      const tot = parseInt(result.price)+ parseInt(this.state.total);

  //  const newOrder = [];
    //  const productSelected = newOrder.push("'" + result.name + "'" + ",");

  //  const completeArray = newOrder + this.state.order;

//    const newPrice = [];
  //    const pricesSelected = newPrice.push(price);
/*
    this.setState({
      order: (this.state.order).concat(newOrder),
      prices: this.state.prices + newPrice,
      total: price
      })
*/

    this.setState({
      order: [
        ...order,
        product

      ],
      total: tot

    })

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
              <InputTable
               />
              <div className="orderForm">
                  <table id="tableOrder" className="table">
                      <thead>
                        <tr>
                          <th scope="col">Productos</th>
                        </tr>
                      </thead>

                      <div>
                        <ul>

                          {this.state.order.map((prods, index) => (
                             <li key={index} className="table">
                                <tbody>
                                    <td>{prods}</td>

                                </tbody>
                              </li>
                            ))}
                        </ul>
                      </div>


                     <tfoot>
                        <tr>
                          <td>TOTAL:</td>
                          <td id="total">{this.state.total}</td>
                        </tr>
                      </tfoot>
                  </table>
              </div>

          </div>

        </div>
      </div>


    )
  }
}


export default VeganFood;
