import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

import Axios from "axios";
import "../App.css";

import "../style.css"

export default function Registration() {
    const [usernameReq, setUserNameReq] = useState("");
    const [passwordReq, setpasswordReq] = useState("");

    const register = () => {
        Axios.post("http://localhost:3001/register", {
            username: usernameReq,
            password: passwordReq,
        }).then((response) => {
            console.log(response);

        });

        alert("Registration Successful , Now login and enjoy shopping");
    };
    return (
        <div class="container-fluid">
            <div className="main">
                <div className="card1">
                    <div className="card-header text-white" style={{ backgroundColor: "#B4EFD5" }}>
                        <div className="card-title">
                            <h1> <span id="action_title">Register</span></h1>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="card-body-top">
                            <Link to='/login' ><button id="login" className="btn" name="login" >login</button></Link>
                            <button id="register" className="btn" name="register" >register</button>

                        </div>
                        <div className="card-body-register">
                            <div id="registration-form">
                                <input
                                    className="input-form"
                                    type="text"
                                    placeholder="Username..."
                                    onChange={(e) => {
                                        setUserNameReq(e.target.value);
                                    }}
                                />

                                <input
                                    className="input-form"
                                    type="password"
                                    placeholder="Password.."
                                    onChange={(e) => {
                                        setpasswordReq(e.target.value);
                                    }}
                                />
                                <br />
                                <br />
                                <button className="submit-form" onClick={register}>Register</button>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};