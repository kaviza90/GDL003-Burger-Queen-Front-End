import React from 'react'
import ButtonItem from '../components/ButtonItem';
import ButtonItemTwo from '../components/ButtonItemTwo';
import '../all.css'



class VeganFood extends React.Component{
    render(){
        return(
            <div className= "grid-container">
        <ButtonItem></ButtonItem>,
        <ButtonItemTwo></ButtonItemTwo>
        </div>    
            )
    }

}

export default VeganFood;