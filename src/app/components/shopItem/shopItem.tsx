import { FC, useState } from "react";
import styles from "./shopItem.module.scss";

export interface IGTItem {
  shopItem?: IShopItem;
}

// TODO: mover a otro lado
export interface IShopItem {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  imagen: string;
  fav: boolean;
  rating: number;
  categoria: string;
}

const GTShopItem: FC<IGTItem> = ({ shopItem }: IGTItem) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={styles.shopItem}>
      <div className={styles.shopItem__imgContainer}>
        <img
          src={shopItem?.imagen}
          className={`${styles.img} ${isLoaded ? styles.imgLoaded : ""}`}
          alt="shop-item"
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      <div className={styles.shopItem__titleSection}>
        <p className={styles.shopItem__titleSection__title}>
          {shopItem?.titulo}
        </p>

        <div className={styles.shopItem__titleSection__rightSection}>
          <div className={styles.star}></div>
          <p className={styles.shopItem__titleSection__rightSection__text}>
            {shopItem?.rating}
          </p>
        </div>
      </div>

      <p className={styles.shopItem__subtitle}>{shopItem?.categoria}</p>

      <p className={styles.shopItem__description}>{shopItem?.descripcion}</p>

      <p className={styles.shopItem__description}>{`$ ${shopItem?.precio}`}</p>
    </div>
  );
};

export default GTShopItem;
