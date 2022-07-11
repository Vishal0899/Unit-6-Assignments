import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Scrolling } from './Components/Scrolling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Scrolling/>
    </div>
  )
}

export default App
