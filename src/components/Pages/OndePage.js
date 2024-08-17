import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/OndePage.css';

import item1 from '../assets/images/item1.webp';
import item2 from '../assets/images/item2.webp';
import item3 from '../assets/images/item3.webp';
import item4 from '../assets/images/item4.webp';
import item5 from '../assets/images/item5.webp';
import item6 from '../assets/images/item6.webp';

function OndePage() {
    const [isPriceDropdownOpen, setIsPriceDropdownOpen] = React.useState(false);
    const [isSizeDropdownOpen, setIsSizeDropdownOpen] = React.useState(false);

    return (
        <div className="onde-page-container">
            {/* Phần 1: Tên thương hiệu */}
            <div className="brand-name">ONDÉ</div>

            {/* Phần 2: Bộ lọc */}
            <div className="filter-section">
                {/* Phần nhỏ 1: Icon phễu lọc và title "Bộ lọc" */}
                <div className="filter-title">
                    <i className='bx bx-filter-alt'></i> Bộ lọc
                </div>

                {/* Phần nhỏ 2: Drop-down "Giá sản phẩm" */}
                <div
                    className="filter-dropdown"
                    onMouseEnter={() => setIsPriceDropdownOpen(true)}
                    onMouseLeave={() => setIsPriceDropdownOpen(false)}
                >
                    <button className="dropdown-button">Giá sản phẩm ▼</button>
                    {isPriceDropdownOpen && (
                        <div className="dropdown-content">
                            <label><input type="checkbox" value="under500" /> Dưới 500,000đ</label>
                            <label><input type="checkbox" value="500to2000" /> 500,000đ - 2,000,000đ</label>
                            <label><input type="checkbox" value="above2000" /> Trên 2,000,000đ</label>
                        </div>
                    )}
                </div>

                {/* Phần nhỏ 3: Drop-down "Kích thước" */}
                <div
                    className="filter-dropdown"
                    onMouseEnter={() => setIsSizeDropdownOpen(true)}
                    onMouseLeave={() => setIsSizeDropdownOpen(false)}
                >
                    <button className="dropdown-button">Kích thước ▼</button>
                    {isSizeDropdownOpen && (
                        <div className="dropdown-content size-option-container">
                            {["S", "M", "L", "XL"].map(size => (
                                <div key={size} className="size-option">{size}</div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Phần 3: Danh sách sản phẩm */}
            <div className="product-grid">
                {[item1, item2, item3, item4, item5, item6].map((item, index) => (
                    <Link to={`/product/${index + 1}`} key={index} className="product-item-link">
                        <div className="product-item">
                            <img src={item} alt={`Sản phẩm ${index + 1}`} />
                            <div className="product-inList-info">
                                <div className="product-inList-name">Mã SP - Tên SP {index + 1}</div>
                                <div className="product-inList-price">Giá: 1,000,000đ</div>
                            </div>
                        </div>
                    </Link>

                ))}
            </div>
        </div>
    );
}

export default OndePage;
