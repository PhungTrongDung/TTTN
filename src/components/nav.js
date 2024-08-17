import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { BrowserRouter, Routes } from 'react-router-dom';

import OndePage from "./Pages/OndePage";


import '../components/assets/css/nav.css';

function Nav() {
    const [isCollectionOpen, setIsCollectionOpen] = useState(false);
    // const [isSanPhamOpen, setIsSanPhamOpen] = useState(false);

    const navigate = useNavigate();

    const handleCollectionClick = (path) => {
        setIsCollectionOpen(false); // Đóng dropdown
        navigate(path); // Điều hướng đến đường dẫn mới
      };

    return (
        <div>
            <div className="navigation">
                <nav>
                    <Link to="/">Trang Chủ</Link>

                    {/* Dropdown Collection */}
                    <div className="dropdown">
                        <button
                            className="collection-button"
                            onMouseEnter={() => setIsCollectionOpen(true)}
                            onMouseLeave={() => setIsCollectionOpen(false)}
                        >
                            Collection
                        </button>
                        {isCollectionOpen && (
                            <div
                                className="dropdown-content"
                                onMouseEnter={() => setIsCollectionOpen(true)}
                                onMouseLeave={() => setIsCollectionOpen(false)}
                            >
                                <button onClick={() => handleCollectionClick("/onde")}>ONDÉ</button>
                                <button onClick={() => handleCollectionClick("/rhody")}>Rhody</button>
                                <button onClick={() => handleCollectionClick("/rautumn")}>R - Autumn</button>
                                <button onClick={() => handleCollectionClick("/festival")}>Festival</button>
                            </div>
                        )}
                    </div>



                    {/* Dropdown Sản Phẩm */}
                    {/* <div className="dropdown">
              <button
                className="sanpham-button"
                onMouseEnter={() => setIsSanPhamOpen(true)}
                onMouseLeave={() => setIsSanPhamOpen(false)}
              >
                Sản Phẩm
              </button>
              {isSanPhamOpen && (
                <div
                  className="dropdown-content"
                  onMouseEnter={() => setIsSanPhamOpen(true)}
                  onMouseLeave={() => setIsSanPhamOpen(false)}
                >
                  <a href="#">Áo</a>
                  <a href="#">Quần</a>
                  <a href="#">Váy</a>
                </div>
              )}
            </div> */}




                    <Link to="/blog">Blog</Link>
                    <Link to="/about">Giới Thiệu</Link>
                </nav>
            </div>
        </div>
    );
}

export default Nav;