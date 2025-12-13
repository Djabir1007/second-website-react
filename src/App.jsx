import { useState } from "react";
import viteLogo from "/vite.svg";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
