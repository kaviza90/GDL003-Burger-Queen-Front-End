import React from 'react';

class InputTable extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: ''
      }
      this.updateState = this.updateState.bind(this);
   };
   updateState(e) {
      this.setState({data: e.target.value});
   }
   render() {
      return (
         <div>
            <input type = "text" value = {this.state.data} 
               onChange = {this.updateState} />
            <h4>{this.state.data}</h4>
         </div>
      );
   }
}
export default InputTable;








/*import React from 'react';

class InputTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
   const Value = this.state.value;
   console.log(Value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Table:
          <input type="text" placeholder="Nombre del cliente" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input id="AddTable" type="submit" value="ok" className="InputButtom" />
        <a href="#Cont2"></a>
      </form>
    );
  }
}

export default InputTable;*/