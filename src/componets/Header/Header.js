import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {


    return (
        <>
            <div class="page-header " >
                <nav class="navbar navbar-expand">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="logo-box"><a href="/" class="logo-text"> <img src={"https://www.foodnavigator-asia.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-asia.com/headlines/markets/covid-19-s-crop-crisis-pandemic-poses-major-risk-to-asia-s-food-supply-and-trade-expert/10911691-1-eng-GB/COVID-19-s-crop-crisis-Pandemic-poses-major-risk-to-Asia-s-food-supply-and-trade-expert.jpg"} alt="profile image" width={"100px"} />
                    </a></div>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item nav-profile dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span>{localStorage.getItem("login")}</span>
                                </a>
                                {/* <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to='/profile' class="dropdown-item" href="#">Preview Profile</Link>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" style={{ cursor: "pointer" }} onClick={logout} >Log out</a>
                                </div> */}
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        </>
    );
}
