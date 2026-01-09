// React
import { Outlet } from "react-router-dom";

// Components
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// Types
import type { Favorite } from "@/types/favorite";

type MainLayoutProps = {
  favorites: Favorite[];
};

const MainLayout = ({ favorites }: MainLayoutProps) => {
  return (
    <div className="container">
      <Header favorites={favorites} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
