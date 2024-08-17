import Header from './components/header';
import Nav from './components/nav';
import Banner from './components/banner';
import Body from './components/body_home';
import Footer from './components/footer';

import OndePage from "./components/Pages/OndePage";
import ProductDetail from "./components/Pages/ProductDetail";
import Payment from "./components/Pages/Payment";

import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  // Kiểm tra nếu đường dẫn bắt đầu bằng "/product/"
  const isProductDetailPage = location.pathname.startsWith('/product/');
  const isPaymentPage = location.pathname.startsWith('/payment');

  return (
    <div>
      <div className="main">
        <Header />
        <Nav />

        {/* Hiển thị Banner nếu không phải trang chi tiết sản phẩm */}
        {!isProductDetailPage && !isPaymentPage && <Banner />}

        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/onde" element={<OndePage />} />
          <Route path="/product/:id" element={<ProductDetail />} /> {/* Route cho trang chi tiết sản phẩm */}
          <Route path="/payment" element={<Payment />} /> 
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
