import React from 'react'
import ButtonItem from '../components/ButtonItem';
import ButtonItemTwo from '../components/ButtonItemTwo';
import '../all.css'



class VeganFood extends React.Component{
    render(){
        return(
           
        <div className= "back-g">
        <ButtonItem></ButtonItem>
        <div  className= "grid-container">
        <ButtonItemTwo></ButtonItemTwo>
        </div>
        </div>
           
            )
    }

}

export default VeganFood;