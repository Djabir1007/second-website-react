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
import type { Favorite, ToggleFavorite } from "./types/favorite";
import type {
  CartItem,
  ToggleCart,
  RemoveCart,
  IncreaseQty,
  DecreaseQty,
} from "./types/cart";

function App() {
  // Массив id избранных товаров
  const [favorites, setFavorites] = useState<Favorite[]>(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const toggleFavorite: ToggleFavorite = (id, type) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === id && item.type === type);

      if (exists) {
        return prev.filter((item) => !(item.id === id && item.type === type));
      }

      return [...prev, { id, type }];
    });
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // корзина

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const toggleCart: ToggleCart = (id, type, title, price, img) => {
    setCart((prev) => {
      const exists = prev.some((item) => item.id === id && item.type === type);
      if (exists) {
        return prev;
      } else {
        return [...prev, { id, type, title, price, img, qty: 1 }];
      }
    });
  };

  // удаление товара из корзины
  const removeCart: RemoveCart = (id, type) => {
    setCart((prev) => {
      return prev.filter((item) => !(item.id === id && item.type === type));
    });
  };

  // Счетчик увеличения одного товара
  const increaseQty: IncreaseQty = (id, type) => {
    setCart((prev) => {
      return prev.map((item) => {
        const isTarget = item.id === id && item.type === type;

        if (!isTarget) return item;

        return { ...item, qty: item.qty + 1 };
      });
    });
  };

  // Счетчик уменьшения одного товара
  const decreaseQty: DecreaseQty = (id, type) => {
    setCart((prev) => {
      return prev.map((item) => {
        const isTarget = item.id === id && item.type === type;

        if (!isTarget) return item;

        return { ...item, qty: Math.max(1, item.qty - 1) };
      });
    });
  };

  return (
    <Routes>
      <Route element={<MainLayout favorites={favorites} cart={cart} />}>
        <Route
          path="/"
          element={
            <Home favorites={favorites} toggleFavorite={toggleFavorite} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeCart={removeCart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites favorites={favorites} toggleFavorite={toggleFavorite} />
          }
        />
        <Route
          path="/product/:type/:id"
          element={<Product toggleCart={toggleCart} />}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
