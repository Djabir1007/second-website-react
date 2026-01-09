// React
import { useEffect, useState } from "react";

// Router
import { Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";

// Pages
import Home from "./pages/Home";
import Cart from "./pages/Cart/Cart";
import Favorites from "./pages/Favorites/Favorites";
import Product from "./pages/Product/Product";
import NotFound from "./pages/NotFound/NotFound";

// Types
import type { Favorite } from "./types/favorite";

function App() {
  // Массив id избранных товаров
  const [favorites, setFavorites] = useState<Favorite[]>(() => {
    const saved = localStorage.getItem("favorites");

    if (!saved) {
      return [];
    }

    return JSON.parse(saved) as Favorite[];
  });

  function toggleFavorite(id: Favorite["id"], type: Favorite["type"]) {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === id && item.type === type);

      if (exists) {
        return prev.filter((item) => !(item.id === id && item.type === type));
      }

      return [...prev, { id, type }];
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
