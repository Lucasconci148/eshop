import styles from "./smallHeader.module.scss";
import Image from "next/image";

const SmallHeader = ({ product }: any) => {
  return (
    <>
      <p className={styles.smallHeader__title}>{product?.titulo}</p>

      <section className={styles.smallHeader__container}>
        <p className={styles.smallHeader__raitingSection__number}>
          {`$ ${product?.precio}`}
        </p>

        <div className={styles.smallHeader__raitingSection}>
          <Image
            src="/star.jpg"
            alt="star"
            width={20}
            height={20}
            style={{ marginRight: "2px" }}
          />
          <p className={styles.smallHeader__raitingSection__number}>
            {product?.rating}
          </p>
        </div>
      </section>

      <hr />
    </>
  );
};

export default SmallHeader;
