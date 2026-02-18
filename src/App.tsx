import { useEffect, useState } from "react";

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Cart from "./pages/Cart/Cart";
import Favorites from "./pages/Favorites/Favorites";
import Product from "./pages/Product/Product";
import NotFound from "./pages/NotFound/NotFound";
import Checkout from "./pages/Checkout/Checkout";

import type { Favorite, ToggleFavorite, FavoriteType } from "./types/favorite";
import type {
  CartItem,
  ToggleCart,
  RemoveCart,
  IncreaseQty,
  DecreaseQty,
} from "./types/cart";

function App() {
  const [favorites, setFavorites] = useState<Favorite[]>(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const toggleFavorite: ToggleFavorite = (id, type) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === id && item.type === type);

      if (exists) {
        return prev.filter((item) => !(item.id === id && item.type === type));
      }

      return [...prev, { id, type }];
    });
  };

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

  const removeCart: RemoveCart = (id, type) => {
    setCart((prev) => {
      return prev.filter((item) => !(item.id === id && item.type === type));
    });
  };

  const increaseQty: IncreaseQty = (id, type) => {
    setCart((prev) => {
      return prev.map((item) => {
        const isTarget = item.id === id && item.type === type;

        if (!isTarget) return item;

        return { ...item, qty: item.qty + 1 };
      });
    });
  };

  const decreaseQty: DecreaseQty = (id, type) => {
    setCart((prev) => {
      const updated = prev.map((item) => {
        const isTarget = item.id === id && item.type === type;

        if (!isTarget) {
          return item;
        } else {
          return { ...item, qty: item.qty - 1 };
        }
      });
      return updated.filter((item) => {
        return item.qty > 0;
      });
    });
  };

  return (
    <>
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
              <Favorites
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/product/:type/:id"
            element={
              <Product
                toggleCart={toggleCart}
                cart={cart}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
                toggleFavorite={toggleFavorite}
                favorites={favorites}
              />
            }
          />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default App;
