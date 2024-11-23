import Image from "next/image";
import styles from "./header.module.scss";

const GTHeader = () => {
  return (
    <div className={styles.header}>
      <Image
        src="/cart.png"
        alt="Carrito"
        width={25}
        height={25}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default GTHeader;
