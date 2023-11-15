import React from "react";
import ReactDOM from "react-dom";

class Toggle extends React.Component {
    constructor(props){
        console.log("constructor");
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log("handleClick");
        this.setState(prevState => ({ 
            isToggleOn: !prevState.isToggleOn 
        }));
    }

    render() {
        console.log("render");
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

function ExampleEvent(){

    return (
        <Toggle />
    );
}

export default ExampleEvent;
