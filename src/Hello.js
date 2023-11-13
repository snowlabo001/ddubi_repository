import React from "react";
import PropTypes from "prop-types";

function Ddubi({name, job}){
  return(
      <div><h1>? Do you know {name}?</h1><h2>I'm a(an) {job}.</h2></div>    
  )
}

const doYouKnow = [
  {
    id : 1,
    name : "me",
    job : "programmer" 
  }, 
  {
    id : 2,
    name : "SnowMan",
    job : "idol" 
  }, 
  {
    id : 3,
    name : "luffy",
    job : "pirate" 
  }
]

Ddubi.propTypes = {
  name : PropTypes.string.isRequired,
  job : PropTypes.string.isRequired
}

/* function person(who){
  return <Ddubi name={who.name} job={who.job}/>;
}*/

function Hello() {
  return (
    <div>
      <h1>hello, world!!!</h1>
      {/* {doYouKnow.map(person)} */}
      {doYouKnow.map(who=><Ddubi key={who.id} name={who.name} job={who.job}/>)}
      {/* <Ddubi who='me'/>
      <Ddubi who='SnowMan'/>
      <Ddubi who='React'/> */}
    </div>
  );
}

export default Hello;
