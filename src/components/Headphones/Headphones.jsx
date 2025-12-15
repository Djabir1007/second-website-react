import HeadphonesCard from "./HeadphonesCard";
import HeadphonesData from "./HeadphonesData";
import styles from "./Headphones.module.scss";

const Headphones = () => {
  return (
    <section className={styles.headphones}>
      <h2 className={styles.title}>Наушники</h2>
      <div className={styles.grid}>
        {HeadphonesData.map((el) => {
          return (
            <HeadphonesCard
              key={el.id}
              id={el.id}
              src={el.src}
              alt={el.alt}
              title={el.title}
              value={el.value}
              price={el.price}
              oldPrice={el.oldPrice}
              sale={el.sale}
              star={el.rating}
              altStar={el.altStar}
              salePrice={el.salePrice}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Headphones;
