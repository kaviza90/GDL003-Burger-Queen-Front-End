import React from 'react'
import '../all.css'


class Comanda extends React.Component{
    render(){
        return(
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
            
        )
    }
}
export default Comanda;