import React, { Component } from 'react';

// function Greeting(props) {
//     console.log(props);
//     return <h1>{props.message}</h1> ;
// }





class Greeting extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            text: ''
        }
    }

onInputChange = (value) => {
    this.setState({ name: value });
}


    render() {
        return (
            <div>
                <h1>{this.props.message}</h1>
                <input placeholder="What's your hamster's name?"
                value={ this.state.text }
                onChange={ (event) => this.onInputChange(event.target.value) }
                />             
            </div>

        );
    }
}
    
export default Greeting;