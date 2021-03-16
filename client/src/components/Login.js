import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../App.css";

export default function Login() {
    const [username, setUserName] = useState("");
    const [password, setpassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    const login = () => {
        Axios.post("http://localhost:3001/login", {
            username: username,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                alert('wrong password');
                setLoginStatus(response.data.message);
            }
            else {
                setLoginStatus(response.data[0].username);
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
                <button > Register </button>
                <h1>{loginStatus}</h1>
            </div>
        </div>
    );

}