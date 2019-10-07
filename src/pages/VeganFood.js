import React from 'react'
import ButtonItem from '../components/ButtonItem';
import ButtonItemTwo from '../components/ButtonItemTwo';
import input from '../components/Input';
import FetchApi from '../components/Fetch';
import '../all.css'



class VeganFood extends React.Component{
    render(){
        return(
         <div className="App">
             <header className="App-header">
                 VEGAN FOOD
            <ul>
           <li>Table<input /></li>
           <li>Waiter-Waitress<input /></li>
           </ul>
        </header>


        <div>
         <nav className="Nav">
            <ul>
                <li><ButtonItem /></li>
                <li><ButtonItem /></li>
                <li><ButtonItem /></li>
           </ul>
        </nav>

        <div className="Cont" id="contMenu">
        <p>MENÚ</p>
            <ul>

             
             <li><ButtonItemTwo /></li>
             <li><ButtonItemTwo /></li>
             <li><ButtonItemTwo /></li>
            </ul>
        </div>

        <div className="Cont2">
            <p>Ticket</p>
            <ButtonItemTwo />
        </div>
     </div>
</div>

            )
    }

}

export default VeganFood;
