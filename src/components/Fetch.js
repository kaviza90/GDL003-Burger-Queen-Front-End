import React from "react"; 

export default class FetchApi extends React.Component {

    state = {
        loading: true,
        name: true,
    }

async componentDidMount() {
const url = 'https://rickandmortyapi.com/api/character/';
const response = await fetch(url);
const data = await response.json();
this.setState({name: data.results[0], loading: false });
console.log(data.results[0]);
    }

    render() {
if (this.state.loading) {
    return <div>loading...</div>
}

if (!this.state.name)
return <div>No es un nombre</div>

 return (
<div>
    <div>
    <div>
        <div>{this.state.name}</div>
    </div>          
    )}
    </div>
        );
    }
}