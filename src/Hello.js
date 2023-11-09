import React from "react";

function Ddubi({who}){
  return(
      <h1>Do you know {who}?</h1>    
  )
}

function Hello() {
  return (
    <div>
      <h1>hello, world!!!</h1>
      <Ddubi who='DDUBI'/>
      <Ddubi who='SnowMan'/>
      <Ddubi who='React'/>
    </div>
  );
}

export default Hello;