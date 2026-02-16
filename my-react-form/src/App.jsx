



import { useState } from 'react';
import './App.css';
function App() {
  const [inc, setInc] = useState(0);
  
  function handleClick() {
    setInc(inc => inc + 1);
    console.log("Incremented value: ", inc + 1);
  }
  
  return(

    <>
    <h2>React Form Handling</h2>
    <p><button onClick={handleClick}>Increment</button></p>
    <p>count is {inc}</p>
    </>
  )
}

export default App
