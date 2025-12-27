import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Cart from "./pages/Cart/Cart";
import Favorites from "./pages/Favorites/Favorites";
import Product from "./pages/Product/Product";
import NotFound from "./pages/NotFound/NotFound";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  // Массив id избранных товаров
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  function toggleFavorite(id) {
    setFavorites((prev) => {
      if (prev.includes(id)) {
        return prev.filter((element) => element !== id);
      } else {
        return [...prev, id];
      }
    });
  }

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <Routes>
      <Route element={<MainLayout favorites={favorites} />}>
        <Route
          path="/"
          element={
            <Home favorites={favorites} toggleFavorite={toggleFavorite} />
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/favorites"
          element={
            <Favorites favorites={favorites} toggleFavorite={toggleFavorite} />
          }
        />
        <Route path="/product" element={<Product />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
