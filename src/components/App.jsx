import React, { Component } from 'react';

// function Greeting(props) {
//     console.log(props);
//     return <h1>{props.message}</h1> ;
// }





class Greeting extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    }

    handleInputChange = (value) => {
        this.setState({ text: value });
    }

    handleClick(){
        this.setState({text: hasLoaded});
    }


    render() {
        return (
            <div>
                <h1>{this.props.message}</h1>
                <input type="text" 
                    value={this.state.text}
                    onChange={(event) => this.handleInputChange(event.target.value)}
                />
                <br />
                <button onClick= {this.handleClick} >Click Me!</button>
            </div>

        );
    };
};

export default Greeting;