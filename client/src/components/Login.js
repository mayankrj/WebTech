import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Axios from "axios";
import "../App.css";

export default function Login() {
    const [username, setUserName] = useState("");
    const [password, setpassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    sendLoginStatus = () => {
        this.props.parentCallback(loginStatus);
    }

    const login = () => {
        Axios.post("http://localhost:3001/login", {
            username: username,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                alert('wrong password');
                setLoginStatus(false);
                sendLoginStatus();

            }
            else {
                setLoginStatus(true);
                sendLoginStatus();
            }
        })

    };
    return (
        <div class="container-fluid">
            <div className="Login">
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
                <br />
                <Link to='/register' ><button > Register </button></Link>
                <h1>{loginStatus}</h1>
            </div>
        </div>
    );

}