// import React, { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Jewelry from './components/Jewelry/Jewelry';

function App() {
  // const [count,setCount] = useState(1);
  // let local = localStorage.setItem('number', JSON.stringify(count))
    return (
      <div  className="App">
        {/* <button onClick={() => setCount(count + 1)}>+</button> */}
        {/* <button onClick={() => setCount(count > 0 ? count - 1: count)}>-</button> */}
        <Home/>
        <Jewelry/>
      </div>
    );
} 

export default App;
