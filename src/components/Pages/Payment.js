import React, { useState } from 'react';
import '../assets/css/Payment.css'; 

import item1 from '../assets/images/item1.webp';

function Payment() {
    const [discountCode, setDiscountCode] = useState('');
    const [productPrice] = useState(1000000); // Giá sản phẩm ví dụ
    const [totalPrice, setTotalPrice] = useState(productPrice);

    const handleDiscountApply = () => {
        // Giả sử có một mã giảm giá cụ thể
        if (discountCode === 'DISCOUNT10') {
            setTotalPrice(productPrice * 0.9); // Giảm 10%
        }
    };

    return (
        <div className="payment-container">
            <div className="payment-part">
                {/* Phần 1: Thông tin nhận hàng */}
                <div className="shipping-info">
                    <h1>ONDÉ</h1>
                    <h3>Thông tin giao hàng</h3>
                    
                    <div className="input-group">
                        <input type="text" id="fullName" placeholder="Họ và Tên"/>
                    </div>
                    
                    <div className="input-group">
                        <div class="input-group-double">
                            <input type="email" id="email" placeholder="Email" />
                            <input type="tel" id="phone" placeholder="SĐT" />
                        </div>
                    </div>
                    
                    <div className="input-group">
                        <input type="text" id="address" placeholder="Địa chỉ"/>
                    </div>
                    
                    <div className="input-group">
                        <select id="city">
                            <option value="">Chọn tỉnh/thành phố</option>
                            <option value="hanoi">Hà Nội</option>
                            <option value="hochiminh">Hồ Chí Minh</option>
                            {/* Thêm các tùy chọn khác */}
                        </select>
                    </div>
                    
                    <div className="input-group">
                        <select id="district">
                            <option value="">Chọn quận/huyện</option>
                            <option value="hoankiem">Hoàn Kiếm</option>
                            <option value="binhthanh">Bình Thạnh</option>
                            {/* Thêm các tùy chọn khác */}
                        </select>
                    </div>
                    
                    <div className="button-group">
                        <button>Quay lại</button>
                        <button>Đặt hàng</button>
                    </div>
                </div>
            </div>

            <div className="payment-part">
                {/* Phần 2: Thông tin sản phẩm */}
                <div className="product-info">
                    <div className="product-image">
                        <img src={item1} alt="Sản phẩm" />
                    </div>
                    
                    <div className="discount-section">
                        <input 
                            type="text" 
                            value={discountCode} 
                            onChange={(e) => setDiscountCode(e.target.value)} 
                            placeholder="Nhập mã giảm giá" 
                        />
                        <button onClick={handleDiscountApply}>Sử dụng</button>
                    </div>
                    
                    <div className="price-info">
                        <p className="product-price">Giá sản phẩm: {productPrice.toLocaleString()}đ</p>
                        <p className="total-price">Tổng tiền: {totalPrice.toLocaleString()}đ</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
