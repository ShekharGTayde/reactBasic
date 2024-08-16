
import './App.css';
import React, { useState } from 'react';

function App() {
  const [color,setColor]=useState("black");
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
    <div style={{color:color}}>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dolores saepe deleniti fugit excepturi blanditiis repellat ex quaerat doloremque mollitia ipsum, consectetur repudiandae, totam autem eos dolorum soluta quibusdam libero.</h3>
        <button onClick={RED}>RED</button>
        <button onClick={BLUE}>BLUE</button>
        <button onClick={GREEN}>GREEN</button>
        <button onClick={YELLOW}>YELLOW</button>
    </div>

  );
}

export default App;
