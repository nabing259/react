import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [counter, setCounter] = useState(0);

//  let counter = 5;
 const incrementValue = () => {
  //  counter = counter + 1;
    if(counter < 20){
      setCounter(counter + 1)
    }
 }
 const decrementValue = () => {
   if(counter > 0){
     setCounter(counter - 1)
 }
}
  return (
    <>
      <h1>Chai aur Code</h1>
      <h2>Counter value: {counter}</h2>
      
      <button onClick={incrementValue}>Increment {counter}</button>
      <br />
      <button onClick={decrementValue}>Decrement {counter}</button>
    </>
  )
}

export default App
