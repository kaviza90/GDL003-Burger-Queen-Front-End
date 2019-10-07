import React from 'react'
import ButtonItem from '../components/ButtonItem';
import ButtonItemTwo from '../components/ButtonItemTwo';
import '../all.css'



class VeganFood extends React.Component{
    render(){
        return(
        <div className="App">
        <div className="App-header">
            <ul>
                <li><input /> Table</li> 
                <li><input /> Waiter</li>
            </ul>
        </div>
        


        <div>
         <nav className="Nav">
            <ul>
                <li><ButtonItem /></li> 
                <li><ButtonItem /></li> 
                <li><ButtonItem /></li> 
           </ul>
        </nav>
        
        <div className="title-Menu">
            
                <p>Menu</p>
                <h1>Total Cliente....</h1>
        
        </div>
        
        <div className="Cont" id="contMenu">

        <p>MENÚ</p>

            <ul>
             <li><ButtonItemTwo /></li>
             <li><ButtonItemTwo /></li>
             <li><ButtonItemTwo /></li>
             <li><ButtonItemTwo /></li>
             <li><ButtonItemTwo /></li>
            </ul>
                
        </div>

        <div className="Cont2">

            <p>contenedor 2</p>
            

            <p>Ticket</p>
            <ButtonItemTwo />

        </div>
     </div>
</div>

            )
    }

}

export default VeganFood;