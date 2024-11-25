import styles from "./emptyChart.module.scss";
import Image from "next/image";

const EmptyChart = () => {
  return (
    <div className={styles.emptyChart}>
      <Image src="/cart.png" alt="Carrito" width={45} height={45} />
      <div className={styles.emptyChart__text}>
        <p className={styles.emptyChart__text__title}>Tu carrito esta vacio</p>
        <p className={styles.emptyChart__text__subtitle}>
          Descubri las ctagorias del sitio y eleji los mejores productos
        </p>
      </div>
    </div>
  );
};

export default EmptyChart;
