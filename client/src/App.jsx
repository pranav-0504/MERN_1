import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Register } from "./Pages/Register";
import { Login } from "./Pages/Login";
import { Contact } from "./Pages/Contact";
import { Service } from "./Pages/Service";
import { ErrorPage404 } from "./Pages/ErrorPage404";

import { Footer } from "./components/Footer/footer";

import { Navbar } from "./components/Navbar"; 

const App = () => {
  // return <h1>Our main root Page</h1>

  return( 
    <>
      <BrowserRouter>
        
        {/* NavBar hamesha dikhega har page pe: */}
        <Navbar />        
        
        <Routes>

          {/* Home Page Fect hota hai isme Default: path = "/"  */}
          <Route path = "/" element = {<Home />} />         

          <Route path = "/Home" element = {<Home />} />         
          <Route path = "/about" element = {<About />} />
          <Route path = "/Contact" element = {<Contact />} />
          <Route path = "/Register" element = {<Register />} />
          <Route path = "/Login" element = {<Login />} />
          <Route path="/service" element= {<Service />} />

          {/* For Error 404 Page : some invlaid routing: */}
          <Route path = "*" element={<ErrorPage404 />} />

        </Routes>

        <Footer />
    
      </BrowserRouter>  

    </>
  );
};

export default App;

//! DEFAULT FILE KA CODE:
/*
/ Default Jo Likha aya tha:
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/

