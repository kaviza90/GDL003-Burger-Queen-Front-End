import React from 'react'
import '../all.css'


class OrderForm extends React.Component{
  constructor(props) {
    super(props);
      this.product = props.product;
      this.price = props.price;
      this.total = props.total;
     }


    render(){
        return(
          <div className="orderForm">
              <table id="tableOrder" class="table">
                  <thead>
                    <tr>
                      <th scope="col">Producto</th>
                      <th scope="col">Precio</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>{this.product}</tr>
                    <tr>{this.price}</tr>

                  </tbody>

                 <tfoot>
                    <tr>
                      <td>TOTAL:</td>
                      <td id="total"> {this.total}/ 0.00</td>
                    </tr>
                  </tfoot>
              </table>
          </div>





        )
    }
}
export default OrderForm;


/*
<div className="Comanda">
    <h4 id="nameClient" id="nameClient">Cliente:</h4>
<tboby></tboby>
<table id="tableOrder" class="table">
                <thead>
    <tr>
        <th>Producto</th>
        <th>Precio</th>
        <th>Cant.</th>
        <th></th>
    </tr>
</thead>
<tbody></tbody>
<tfoot>
    <tr>
        <td>TOTAL:</td>
        <td id="total">s/ 0.00</td>
    </tr>
</tfoot>
</table>
</div>


*/
