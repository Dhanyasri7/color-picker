import { useState } from "react";
import './App.css'
import Callback from './Callback'

function App() {
  const [color, setColor] = useState("#b17777");

  const getColor = (clr) => {
    setColor(clr);
  };
  return (
    <>
      <div className="app">
        <h3>COLOR PICKER</h3>
        <h5>Pick your favourite color❤️</h5>
        <div className="box" style={{background:`${color}`}}></div>
      </div>
      
      <Callback getColor={getColor} />
    </>
  )
}

export default App

