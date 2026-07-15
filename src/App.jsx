import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Test from './pages/Test'
import Student from './pages/Student'
import Button from './pages/Button'
import Conditional from './pages/Conditional'
import Lists from './pages/Lists'
import Form from './pages/Form'
import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>React is {5+5} times better than JSX</h1>
      <Test/> */}
      {/* <Student name="threesha" age="20"/> */}
      {/* <Button/> */}
      {/* <Conditional/> */}
      {/* <Lists/> */}
      {/* <Form/> */}
      {/* <Layout /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Form />} />
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
