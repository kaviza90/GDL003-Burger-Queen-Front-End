import React from 'react';
import ButtonItem from '../components/ButtonItem';
import ContainerOne from '../components/ContainerOne';
import ButtonItemTwo from '../components/ButtonItemTwo';
import Item from '../components/Item';
import InputTable from '../components/Input';
import Comanda from '../components/Comanda';

import '../all.css';


class VeganFood extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      results: [ ],
      order: [ ],
     
    };
  //  this.setItems = this.setItems.bind(this);
  }

 

  setItems = (results)=> {
    this.setState({
      results: results
    })
  }

  addItem = (results)=> {
    const orderArray= this.state.results;
    return orderArray;
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
            <ul>
              {
                this.state.results.map(result => {
                  return (
                    <button className="buttonsSubmenu myButton myButtonTwo" onClick={this.addItem} > {result.name}
                    </button>
                  )
                })
              }
            </ul>
          </div>


          <div className="order Cont2">
              <h1>VeganFood</h1>
              <InputTable/>
              <Comanda/>
              <div className="orderForm">
                  <p className="form">MESA</p>
                  <p>Ticket</p>

              </div>
              <div className="orderList">
                  {this.addItem}
              </div>
          </div>

        </div>
      </div>


    )
  }
}



export default VeganFood;
