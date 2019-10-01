import React from 'react'
import ButtonItem from '../components/ButtonItem';
import ButtonItemTwo from '../components/ButtonItemTwo';
import '../all.css'



class VeganFood extends React.Component{
    render(){
        return(
         <div className="App">
             <header className="App-header">
                 logo
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
        <p>MENU</p>
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
            <ButtonItemTwo />
        </div>
     </div>
</div>

            )
    }

}

export default VeganFood;