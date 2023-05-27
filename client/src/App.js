import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dog from "./Dog";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dog' element={<Dog />} />
    </Routes>
  )
};

export default App;