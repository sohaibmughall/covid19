import React, { useState } from 'react';
import Button from '../../componets/button';
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

    const [Username, setUsername] = useState("Sohiab ahmed")
    const [Password, setPassword] = useState("123456789")

    const navigate = useNavigate()
    const login = () => {
        if (Username === "Sohiab ahmed" && Password === "123456789") {
            localStorage.setItem("login", Username)
            navigate("/")
        } else {
            alert("username or password is in correct ")
        }
    }
    return (
        <div className='auth-page sign-in'>
            <div class="container">
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
                                        <button type="submit" class="btn btn-primary btn-block btn-submit">Sign In</button>
                                        <br />
                                        <Link to={"/signup"} class="btn btn-primary btn-block btn-submit"> Registor </Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 d-none d-lg-block d-xl-block">
                        <div class="auth-image"> <img src='https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/3/2022_3$largeimg_1916335275.jpg' /></div>
                    </div>
                </div>
            </div>
        </div>

    );
}
