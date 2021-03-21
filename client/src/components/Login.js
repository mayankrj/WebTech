import React, { useEffect, useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import Axios from "axios";
import "../App.css";
import "../style.css";

export default function Login(props) {
    const [username, setUserName] = useState("");
    const [password, setpassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    const sendLoginStatus = () => {
        props.parentCallback(loginStatus);

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
                if(loginStatus)
                {
                   < Redirect to = '/products'/>
                }
            }
        })

    };
    return (
        <div className="container-fluid">
            <div className="main">
                <div className="card1">
                    <div className="card-header text-white" style={{ backgroundColor: "#B4EFD5" }}>
                        <div className="card-title">
                            <h1> <span id="action_title">User Login</span></h1>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="card-body-top">
                            <button id="login" className="btn" name="login" >login</button>
                            <Link to='/register' ><button id="register" className="btn" name="register" >register</button></Link>

                        </div>
                        <div className="card-body-login">
                            <div id="login-form">
                                <input
                                    className="input-form"
                                    type="text"
                                    placeholder="Username..."
                                    onChange={(e) => {
                                        setUserName(e.target.value);
                                    }}
                                />
                                <input
                                    className="input-form"
                                    type="password"
                                    placeholder="Password..."
                                    onChange={(e) => {
                                        setpassword(e.target.value);
                                    }}
                                />
                                <br />
                                <br />
                                <button className="submit-form" onClick={login} > Login </button>
                                <br />

                                <h1>{loginStatus}</h1>
                            </div>


                        </div>
                    </div>



                </div>
            </div>
        </div>


    );

}