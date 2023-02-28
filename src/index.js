// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import App from "./App";
// import ManageBookings from "./Pages/ManageBookings.js";
// import ManageDatabase from "./Pages/ManageDatabase.js";
// import CurrentBookings from "./Pages/CurrentBookings.js";
// import FindBookings from "./Pages/FindBookings.js";
import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route index element={<App />} />
//       <Route path="ManageBookings" element={<ManageBookings />} />
//       <Route path="FindBookings" element={<FindBookings />} />
//       <Route path="CurrentBookings" element={<CurrentBookings />} />
//       <Route path="ManageDatabase" element={<ManageDatabase />} />
//     </Routes>
//   </BrowserRouter>
// );

// 


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
  
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();