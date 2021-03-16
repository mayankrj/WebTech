
import Axios from 'axios';
import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registration from './components/Registration';
import Login from './components/Login';
function App() {

  return (
    <div className="App">
      {/*<Registration />*/}
      <Login/>

    </div>
  );

}

export default App;
