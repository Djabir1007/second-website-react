import { Outlet } from "react-router-dom";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import type { Favorite } from "@/types/favorite";
import type { CartItem } from "@/types/cart";
import type { Theme } from "@/types/theme";

type MainLayoutProps = {
  favorites: Favorite[];
  cart: CartItem[];
  theme: Theme;
  toggleTheme: () => void;
};

const MainLayout = ({
  favorites,
  cart,
  toggleTheme,
  theme,
}: MainLayoutProps) => {
  return (
    <div className="container">
      <Header
        favorites={favorites}
        cart={cart}
        toggleTheme={toggleTheme}
        theme={theme}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
