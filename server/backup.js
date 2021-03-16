import logo from './logo.svg';
import Axios from 'axios';
import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  
    const [usernameReq, setUserNameReq] = useState("");
    const [passwordReq, setpasswordReq] = useState("");

    const [username, setUserName] = useState("");
    const [password, setpassword] = useState("");

    const [loginStatus , setLoginStatus] = useState("") ;


    const register = () => {
        Axios.post("http://localhost:3001/register", {
            username: usernameReq,
            password: passwordReq,
        }).then((response) => {
            console.log(response);
        });
    };

    const login=()=>
    {
      Axios.post("http://localhost:3001/login", {
        username: username,
        password: password,
    }).then((response) => {
      if(response.data.message)
      {
        setLoginStatus(response.data.message) ;
      }
        else
        {
          setLoginStatus(response.data[0].username) ;
        }
    });
    }
    return (
        <div className="App">
            <div class="container-fluid">
                <div className="registration"></div>
                <label>User</label>
                <input
                    type="text"
                    placeholder="Username..."
                    onChange={(e) => {
                        setUserNameReq(e.target.value);
                    }}
                />
                <label>Password</label>
                <input
                    type="password"
                    placeholder="Password..."
                    onChange={(e) => {
                        setpasswordReq(e.target.value);
                    }}
                />
                <button onClick={register}>Register</button>
            </div>

            <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => {
            setUserName(e.target.value);
        }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setpassword(e.target.value);
        }}
        />
        <button onClick={login}> Login </button>
      </div>
      <h1>{loginStatus}</h1>

        </div>
    );
 
}

export default App;
