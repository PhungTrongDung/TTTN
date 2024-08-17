import React from "react";

import '../components/assets/css/footer.css';

function Footer() {
    return (
        <div>
            <footer>
                <div class="column">
                    <h3>Giới Thiệu</h3>
                    <p>Chúng tôi là thương hiệu thời trang hàng đầu với những mẫu thiết kế hiện đại, phong cách và đa dạng.</p>
                </div>
                <div class="column">
                    <h3>Liên Kết</h3>
                    <a href="#">Tìm Kiếm</a>
                    <a href="#">Giới Thiệu</a>
                    <a href="#">Chính Sách Đổi Trả</a>
                    <a href="#">Chính Sách Bảo Mật</a>
                </div>
                <div class="column">
                    <h3>Thông Tin Liên Hệ</h3>
                    <p class="contact-info"><i>🏠</i>123 Đường Trần Phú, Mộ Lao, Hà Đông, TP. Hà Nội</p>
                    <p class="contact-info"><i>📞</i>0123 456 789</p>
                    <p class="contact-info"><i>✉️</i>rhodthoitrang@gmail.com</p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;