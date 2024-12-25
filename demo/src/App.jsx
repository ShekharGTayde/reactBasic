import Chai from './Chai';
import React, { useState } from 'react';

function App() {
  const [color,setColor]=useState("black"); // hooks is uesd to manage and update the states on ui 
  function RED(){
    setColor(color => "red");
  }
  function BLUE(){
    setColor( color => "blue");
  }
  function GREEN(){
    setColor(color => "green")
  }
  function YELLOW(){
    setColor(color=>"yellow")
  }
  return (
    <>
    <div style={{color:color}}>
        <h3>SHEKHAR TAYDE</h3>
         <button onClick={RED}>RED</button>  
        <button onClick={BLUE}>BLUE</button>
        <button onClick={GREEN}>GREEN</button>
        <button onClick={YELLOW}>YELLOW</button>
    </div>
    <Chai/>
    </>
  );
}

export default App;
