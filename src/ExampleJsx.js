import React from "react";
import ReactDOM from "react-dom";

/*
function formatName(user){
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName : 'Harper',
    lastName : 'Perez'
};

 const element = (
    <h1> Hello, {formatName(user)}!</h1>
);
 */

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

const element = <h1>Hello, world :)</h1>;
//root.render(element);

const name = 'Josh Perez';

class Clock extends React.Component {

    constructor(props){
        super(props);
        this.state = {date : new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({ date: new Date() });
    }

    render(){
        return (
            <div>
                <h1>Hello, world :)</h1>
                <h2>It is {this.state.date.toLocaleDateString() + ' ' + this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

/* function Clock(props){

    return (
        <div>
            <h1>Hello, world!!</h1>
            <h2>It is {props.date.toLocaleDateString() + ' ' + props.date.toLocaleTimeString()}</h2>
        </div>   
    );
}
 */

/* function tick(){
    root.render(<Clock />);
    root.render(<Clock date={new Date()}/>);
    const clock = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()}</h2>
        </div>
    );
    root.render(clock);
    root.render(
        <div>
            {clock}
            <div>{element}</div>
        </div>
    );
} */

function ExampleJsx(){

    //setInterval(tick, 1000);
    root.render(<Clock />);
    
    return (
        <div>
            {element}
            <h1>Hello, {name}</h1>
        </div> 
    );
}

export default ExampleJsx;
