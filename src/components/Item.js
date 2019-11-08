import React, { Component } from 'react';

class Item extends Component{
  constructor(props){
    super(props);
    this.itemName = props.itemName;
    this.itemQuantity = props.itemQuantity;
    this.itemPrice = props.itemPrice
  }
    render(){
        return (
            <li>
              <p>{this.itemName}</p>
              <p>{this.itemQuantity}</p>
              <p>{this.itemPrice}</p>
                <button className="remove">
                    <i className="material-icons">close</i>
                </button>
            </li>
        )
    }
}


export default Item;
