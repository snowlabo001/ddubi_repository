import React from "react";
import ReactDOM from "react-dom";

class ExampleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isGoing : true, numberOfGuests : 2 }
    // this.state = { value : 'coconut'};
    // this.state = { value : 'Please write an essay about your favorite DOM element.'};
    // this.state = { value : ''};

    this.handleInputChange = this.handleInputChange.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name] : value })
  }

  handleChange(event){
    this.setState({value : event.target.value});
  }

  handleSubmit(event){
    // alert('Your favorite flavor is: ' + this.state.value);
    // alert('An essay was submitted : ' + this.state.value);
    // alert('A name was submitted : ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
        <form>
        {/* <form onSubmit={this.handleSubmit}> */}
        <label>
          Is going : 
          <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange} />
        </label>
        <br/>
        <label>
          Number of guests : 
          <input name="numberOfGuests" type="number" value={this.state.numberOfGuests} onChange={this.handleInputChange} /> 
{/*           Pick your favorite flavor :
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select> */}
          {/* <select multiple={true} value={['B', 'C']}></select> */}
          {/* NAME : <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
          {/* ESSAY : <textarea value={this.state.value} onChange={this.handleChange} /> */}
        </label>
        <input type="submit" value="submit" />
      </form>
    );
  }
}



export default ExampleForm;
