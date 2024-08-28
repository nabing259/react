import { useState } from 'react'
import CartContainer from './components/CartContainer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CartContainer />
    </>
  )
}

export default App
