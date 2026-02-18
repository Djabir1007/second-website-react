// React
import { useEffect, useRef, useState } from "react";

// Router
import { Link } from "react-router-dom";

// Styles
import styles from "./Header.module.scss";

// Components
import Logo from "../Logo/Logo";
import HeaderList from "./HeaderList/HeaderList";

// Data
import headerListData from "./HeaderList/headerListData";

// Assets
import { basket, heart, phone, dropdownArrow, chevronDown } from "@/assets/img";

// types
import type { Favorite } from "@/types/favorite";
import type { CartItem } from "@/types/cart";

type HeaderProps = {
  favorites: Favorite[];
  cart: CartItem[];
};

function Header({ favorites, cart }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeBrandId, setActiveBrandId] = useState<number | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;

      if (boxRef.current && !boxRef.current.contains(target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.flex}>
        <div className={styles.content}>
          <Logo />
          <div className={styles.list}>
            <a
              className={styles.phoneLink}
              onClick={(el) => el.preventDefault()}
              href="#"
            >
              <img
                className={styles.phoneIcon}
                src={phone}
                alt="Телефонный иконка"
              />
            </a>
            <div
              className={styles.listWrapper}
              ref={boxRef}
              onClick={handleToggle}
            >
              <div className={styles.wrapperHeader}>
                <p className={styles.wrapperDesc}>Выбрать модель телефона</p>
                <button className={styles.listWrapperItemBtn}>
                  <img
                    className={`${styles.arrowMain} ${
                      isOpen ? styles.arrowOpen : ""
                    }`}
                    src={dropdownArrow}
                    alt="галочка"
                  />
                </button>
              </div>
              <div
                className={`${styles.modelsList} ${
                  !isOpen ? styles.modelsListNone : ""
                } `}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {isOpen &&
                  headerListData.map((brand) => {
                    const isActive = activeBrandId === brand.id;
                    return (
                      <div className={styles.modelsListContent} key={brand.id}>
                        <button
                          className={styles.brandList}
                          type="button"
                          onClick={() =>
                            setActiveBrandId(isActive ? null : brand.id)
                          }
                        >
                          <span className={styles.brandName}>
                            {brand.brand}
                          </span>
                          <img
                            className={`${styles.arrowMain} ${
                              isActive ? styles.arrowOpen : ""
                            }`}
                            src={chevronDown}
                            alt=""
                          />
                        </button>

                        {isActive && (
                          <ul className={styles.models}>
                            {brand.models.map((m) => (
                              <HeaderList key={m.id} model={m.model} />
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.btn}>
          <div className={styles.btnHeartWrapper}>
            <Link className={styles.btnHeart} to="/favorites">
              <img src={heart} alt="Избранное" />
              {favorites.length > 0 && (
                <span className={styles.btnHeartValue}>{favorites.length}</span>
              )}
            </Link>
          </div>
          <div className={styles.btnHeartWrapper}>
            <Link className={styles.btnBasket} to="/cart">
              <img src={basket} alt="Корзина" />
              {cart.length > 0 && (
                <button className={styles.btnCartValue}>{cart.length}</button>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
