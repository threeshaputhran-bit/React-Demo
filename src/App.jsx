import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Test from './pages/Test'
import Student from './pages/Student'
import Button from './pages/Button'
import Conditional from './pages/Conditional'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>React is {5+5} times better than JSX</h1>
      <Test/> */}
      {/* <Student name="threesha" age="20"/> */}
      {/* <Button/> */}
      <Conditional/>
    
    </>
  );
}

export default App;
