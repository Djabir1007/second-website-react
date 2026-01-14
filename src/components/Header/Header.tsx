// React
import { useState } from "react";

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

type IconButtonProps = {
  className: string;
  src: string;
  alt: string;
  href: string;
};

// Для кнопок 'избранное' и 'корзина'
const IconButton = ({ className, src, alt, href }: IconButtonProps) => {
  return (
    <Link className={className} to={href}>
      <img src={src} alt={alt} />
    </Link>
  );
};

function Header({ favorites, cart }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeBrandId, setActiveBrandId] = useState<number | null>(null);
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
            <div className={styles.listWrapper} onClick={handleToggle}>
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
                              activeBrandId === brand.id ? styles.arrowOpen : ""
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
            <IconButton
              className={styles.btnHeart}
              src={heart}
              alt="Избранное"
              href="/favorites"
            />
            {favorites.length > 0 && (
              <span className={styles.btnHeartValue}>{favorites.length}</span>
            )}
          </div>
          <div className={styles.btnHeartWrapper}>
            <IconButton
              className={styles.btnBasket}
              src={basket}
              alt="Корзина"
              href="/cart"
            />
            {cart.length > 0 && (
              <span className={styles.btnCartValue}>{cart.length}</span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
