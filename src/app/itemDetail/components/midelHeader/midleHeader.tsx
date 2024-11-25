import styles from "./midleHeader.module.scss";
import Image from "next/image";

const MidleHeader = ({ product }: any) => {
  return (
    <>
      <div className={styles.midleHeader__container}>
        <p className={styles.midleHeader__title}>{product?.titulo}</p>
        <div className={styles.midleHeader__raitingSection}>
          <Image
            src="/star.jpg"
            alt="star"
            width={20}
            height={20}
            style={{ marginRight: "2px" }}
          />
          <p className={styles.midleHeader__raitingSection__number}>
            {product?.rating}
          </p>
        </div>
      </div>

      <p className={styles.midleHeader__raitingSection__number}>
        {`$ ${product?.precio}`}
      </p>

      <hr />
    </>
  );
};

export default MidleHeader;
