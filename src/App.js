import React, { useState, useEffect } from "react";
import Home from "./Components/Home/Home";
import {Routes,Route} from "react-router-dom"
import FoodSearch from './Components/Foodsearch/FoodSearch'
import Navbar from "./Components/Navbar/Navbar";
import FoodDetails from "./Components/Foodetail/FoodDetails";

const App = () => {

  return (
    <div className="App-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path='/foodsearch' element={<FoodSearch />} ></Route>
        <Route path='/details/:id' element={<FoodDetails />} ></Route>
     </Routes>
    </div>
  );
};

export default App;

