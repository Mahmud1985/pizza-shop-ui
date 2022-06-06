import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>THE BEST PIZZA ON THE TOWN</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Yahya tontişko seni yahya yaramaz çocuk. Benim tatlı bebeğim.
      </p>
    </div>
  );
};
export default PizzaCard;
