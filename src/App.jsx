import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import Favorites from "./components/Favorites/Favorites";
import Product from "./components/Product/Product";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
