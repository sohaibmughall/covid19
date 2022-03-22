import React, { useState } from 'react';
import Button from '../../componets/button';
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {

    const [Username, setUsername] = useState("Sohiab ahmed")
    const [Password, setPassword] = useState("123456789")

    const navigate = useNavigate()
    const login = () => {
        if (Username === "Sohiab ahmed" && Password === "123456789") {
            localStorage.setItem("login", Username)
            navigate("/deshboard")
        } else {
            alert("username or password is in correct ")
        }
    }
    return (
        <div className='auth-page sign-in'>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="auth-form">
                            <div class="row">
                                <div class="col">
                                    <div class="logo-box"><h1 href="#" class="logo-text">Covid !9</h1></div>
                                    <form onSubmit={login}>
                                        <div class="form-group">
                                            <input type="text" value={Username} class="form-control" id="email" aria-describedby="emailHelp" placeholder="UerName" />
                                        </div>
                                        <br />
                                        <div class="form-group">
                                            <input type="password" value={Password} class="form-control" id="password" placeholder="Password" />
                                        </div>
                                        <br />
                                        <div class="form-group">
                                            <input type="password" value={Password} class="form-control" id="password" placeholder="Password" />
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-block btn-submit">Sign Up</button>
                                        <br/>
                                        <Link to={"/"} class="btn btn-primary btn-block btn-submit"> Login </Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 d-none d-lg-block d-xl-block">
                        <div class="auth-image"> <img src='https://cdn0.scrvt.com/39b415fb07de4d9656c7b516d8e2d907/1800000007316420/e58941b4997a/v/e915e1fb5018/COVID-19_Laboratory_testing_guide_download_1800000007316420.png' /> </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
