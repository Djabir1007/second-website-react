// React
import { Outlet } from "react-router-dom";

// Components
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// Types
import type { Favorite } from "@/types/favorite";
import type { CartItem } from "@/types/cart";

type MainLayoutProps = {
  favorites: Favorite[];
  cart: CartItem[];
};

const MainLayout = ({ favorites, cart }: MainLayoutProps) => {
  return (
    <div className="container">
      <Header favorites={favorites} cart={cart} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
