import "./styles/Commons.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.js";
import Header from "./components/Header.js";
import ProductPage from "./pages/ProductPage.js";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFound from "./pages/NotFound.js";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setProducts(res.data.slice(0, 10));
    };
    getProducts();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        {/* Header 안에서 링크를 쓰고 있으므로 브라우저라우터 태그 안에 들어가야 함.  */}
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/products"
            element={<ProductPage products={products} />}
          />
          <Route
            path="/products/:productId"
            element={<ProductDetailPage products={products} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
