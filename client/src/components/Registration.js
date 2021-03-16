import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../App.css";

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
    };
    return (
        <div class="container-fluid">
            <div className="Registration">
               
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
                    placeholder="Password123..."
                    onChange={(e) => {
                        setpasswordReq(e.target.value);
                    }}
                />
                <button onClick={register}>Register</button>
            </div>
        </div>
    );
};