import React from 'react'
import ButtonConfirm from '../components/ButtonConfirm';
import ButtonDelete from '../components/ButtonDelete';
import '../all.css'



class Ticket extends React.Component{
    render(){
        return(
           
        <div className= "back-g">
        <ButtonConfirm></ButtonConfirm>
        <div  className= "grid-container">
        <ButtonDelete></ButtonDelete>
        </div>
        </div>
           )
    }

}

export default Ticket;