import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'; 

import '../assets/css/ProductDetail.css';

import item1 from '../assets/images/item1.webp';

import '../assets/css/ProductDetail.css';

function ProductDetail() {
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("");
    const navigate = useNavigate();

    const handleQuantityChange = (amount) => {
        if (quantity + amount > 0) {
            setQuantity(quantity + amount);
        }
    };

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const handleOrderClick = () => {
        // Chuyển hướng đến trang thanh toán
        navigate('/payment');
    };

    return (
        <div className="product-detail-container">
            {/* Phần 1: Ảnh mô tả sản phẩm */}
            <div className="product-image">
                <img src={item1} alt="Sản phẩm" />
            </div>

            {/* Phần 2: Thông tin sản phẩm */}
            <div className="product-info">
                {/* Dòng 1: Mã sản phẩm - Tên sản phẩm */}
                <div className="product-id-name">Mã SP - Tên SP</div>

                {/* Dòng 2: Giá sản phẩm */}
                <div className="product-price">1,000,000đ</div>

                {/* Dòng mới: Lựa chọn kích thước */}
                <div className="product-size">
                    {["S", "M", "L", "XL"].map(size => (
                        <button
                            key={size}
                            className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                            onClick={() => handleSizeSelect(size)}
                        >
                            {size}
                        </button>
                    ))}
                </div>

                {/* Dòng 3: Tăng giảm số lượng */}
                <div className="product-quantity">
                    <button onClick={() => handleQuantityChange(-1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => handleQuantityChange(1)}>+</button>
                </div>

                {/* Dòng 4: Button "Đặt hàng" */}
                <div className="product-order">
                    <button onClick={handleOrderClick}>Đặt hàng</button>
                </div>

                {/* Dòng 5: Mô tả sản phẩm */}
                <div className="product-description">Chưa có mô tả cho sản phẩm này</div>
            </div>
        </div>
    );
}

export default ProductDetail;

