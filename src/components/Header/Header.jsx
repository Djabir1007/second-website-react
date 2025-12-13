import { useState } from "react";
import styles from "./Header.module.scss";
import Logo from "../ui/Logo/Logo";
import phone from "../../assets/img/header/Phone.svg";
import tick from "../../assets/img/header/tick.svg";
import heart from "../../assets/img/header/heart.svg";
import basket from "../../assets/img/header/basket.svg";
import modelIcon from "../../assets/img/icons/model.svg";
import HeaderListdata from "./HeaderListData";
import { Link } from "react-router-dom";

// Для кнопок 'избранное' и 'корзина'
const IconButton = ({ className, src, alt, href }) => {
  return (
    <Link className={className} to={href}>
      <img src={src} alt={alt} />
    </Link>
  );
};

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.flex}>
        <div className={styles.content}>
          <Logo />
          <div className={styles.list}>
            <a className={styles.phoneLink} href="#">
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
                    src={tick}
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
                  HeaderListdata.map((el) => {
                    return (
                      <div className={styles.modelsListContent}>
                        <ul className={styles.brandList} key={el.id}>
                          <a className={styles.brandLink}>{el.brand}</a>
                        </ul>
                        <img src={modelIcon} alt="" />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.btn}>
          <IconButton className={styles.btnHeart} src={heart} alt="Избранное" />
          <IconButton
            className={styles.btnBasket}
            src={basket}
            alt="Корзина"
            href="/cart"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
