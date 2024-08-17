import React from "react";
// import { BrowserRouter, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";

import item1 from './assets/images/item1.webp';
import item2 from './assets/images/item2.webp';
import item3 from './assets/images/item3.webp';
import item4 from './assets/images/item4.webp';
import item5 from './assets/images/item5.webp';
import item6 from './assets/images/item6.webp';
import '../components/assets/css/body_home.css';

function Body() {
    return (

        <div>
            <div class="body">
                <h2>Xu Hướng Thời Trang</h2>
                <div class="gallery">
                        <a href=""><img src={item1} alt="Thời trang 1"></img></a>
                        <a href=""><img src={item2} alt="Thời trang 2"></img></a>
                        <a href=""><img src={item3} alt="Thời trang 3"></img></a>
                        <a href=""><img src={item4} alt="Thời trang 4"></img></a>
                        <a href=""><img src={item5} alt="Thời trang 5"></img></a>
                        <a href=""><img src={item6} alt="Thời trang 6"></img></a>
                </div>
            </div>
        </div>

    );
};

export default Body;