
import React, { useState } from "react";

import './index.css'

function App() {
 //states
  
  const [weight,setWeight]=useState(0);
  const [height,setHeight]=useState(0);
  const [bmi,setBmi]=useState('');
  const [message,setMessage]=useState('');

  let imgSrc='';





  return (
   <div className="app">
    <div className="container">
  <h2 className="center">BMI Calculator</h2>
  <form>
    <div>
      <label>Weight (lbs)</label>
      <input value={weight}/>
    </div>
    <div>
      <label>Height (in)</label>
      <input value={weight}/>
    </div>
    <div>
      <button className="btn" type="submit">Submit</button>
      <button className="btn btn-outline" type="submit">Submit</button>
    </div>
  </form>

  <div className="center">
    <h3>Your BMI is: {bmi}</h3>
    <p>{message}</p>
  </div>

  <div className="img-container">
    <img src={imgSrc} alt=''></img>
  
  
  </div>
    </div>
   </div>
  );
}

export default App;
