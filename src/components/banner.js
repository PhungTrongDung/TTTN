import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { BrowserRouter, Routes } from 'react-router-dom';

import OndePage from "./Pages/OndePage";


import '../components/assets/css/banner.css';

function Banner() {

    return (
        <div>
            <div className="banner-container">
                {/* Banner */}
                <div className="banner"></div>
            </div>
        </div>
    );
}

export default Banner;