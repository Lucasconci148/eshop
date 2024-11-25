import { FC, useState } from "react";
import styles from "./chartItem.module.scss";
import Image from "next/image";

export interface IChartItem {
  chartItem?: any; //TODO: reemplazar por tipo correspondiente
  handleAdd: () => void;
  handleDecrese: () => void;
  handleDelete: () => void;
}

const ChartItem: FC<IChartItem> = ({
  chartItem,
  handleAdd,
  handleDecrese,
  handleDelete,
}: IChartItem) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={styles.shopItem}>
      <section className={styles.shopItem__rightSection}>
        <div className={styles.shopItem__imgContainer}>
          <img
            src={chartItem?.imagen}
            className={`${styles.img} ${isLoaded ? styles.imgLoaded : ""}`}
            alt="chart-item"
            onLoad={() => setIsLoaded(true)}
          />
        </div>

        <div className={styles.shopItem__titleSection}>
          <p className={styles.shopItem__titleSection__title}>
            {chartItem?.titulo}
          </p>
          <p className={styles.shopItem__subtitle}>{chartItem?.categoria}</p>
          <p className={styles.shopItem__price}>{`$ ${chartItem?.precio}`}</p>

          <section style={{ display: "flex", flexDirection: "row" }}>
            <div className={styles.actionBtn} onClick={handleAdd}>
              +
            </div>
            <p className={styles.counter}>{chartItem?.count}</p>
            <div className={styles.actionBtn} onClick={handleDecrese}>
              -
            </div>
          </section>
        </div>
      </section>

      <section className={styles.garbageIconContainer}>
        <Image
          src="/garbage.png"
          alt="garbage"
          width={25}
          height={25}
          style={{ cursor: "pointer" }}
          onClick={handleDelete}
        />
      </section>
    </div>
  );
};

export default ChartItem;
