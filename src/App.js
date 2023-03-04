import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./utilites/Navbar";

function App() {
  return (
    <div className="App">
     <Navbar />
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Home />} />
     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
