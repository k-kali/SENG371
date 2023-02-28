// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages"
import ManageBookings from "./Pages/ManageBookings.js";
import ManageDatabase from "./Pages/ManageDatabase.js";
import CurrentBookings from "./Pages/CurrentBookings.js";
import FindBookings from "./Pages/FindBookings.js";

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/FindBookings' exact component={FindBookings} />
        <Route path='/ManageBookings' component={ManageBookings} />
        <Route path='/CurrentBookings' component={CurrentBookings} />
        <Route path='/ManageDatabase' component={ManageDatabase} />
      </Routes>
    </Router>
  );
}

export default App;
