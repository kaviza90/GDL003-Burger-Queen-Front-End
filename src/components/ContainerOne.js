import React from 'react';
import VeganFood from '../pages/VeganFood';
import ButtonItem from './ButtonItem';
import '../all.css';


class ContainerOne extends React.Component{

 render(){

    return(
        <div>
          <input type = "text" value = {this.props.myDataProp}
              onChange = {this.props.updateStateProp} />
            <h3>{this.props.myDataProp}</h3>
        </div>
    )
  }

}

export default ContainerOne;
