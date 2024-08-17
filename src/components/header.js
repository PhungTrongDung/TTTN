import React from "react";
// import { BrowserRouter, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";

import '../components/assets/css/header.css';

function Header() {
    return (

        <div>
            <header>
                <h1>R h O D</h1>
                <div class="buttons">
                    <button><i class="fas fa-search"></i></button>
                    <button><i class="fas fa-user"></i></button>
                    <button><i class="fas fa-shopping-cart"></i></button>
                </div>
            </header>
        </div>

    );
};

export default Header;