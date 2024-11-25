import { FC, useState } from "react";
import styles from "./shopItem.module.scss";
import { IShopItem } from "@/app/hooks/useGetProducts";
import Image from "next/image";

export interface IGTItem {
  handleOnClick: () => void;
  shopItem?: IShopItem;
}

const GTShopItem: FC<IGTItem> = ({ shopItem, handleOnClick }: IGTItem) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={styles.shopItem} onClick={handleOnClick}>
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
          <Image
            src="/star.jpg"
            alt="star"
            width={20}
            height={20}
            style={{ marginRight: "2px" }}
          />

          <p className={styles.shopItem__titleSection__rightSection__text}>
            {shopItem?.rating}
          </p>
        </div>
      </div>

      <p className={styles.shopItem__subtitle}>{shopItem?.categoria}</p>
      <p className={styles.shopItem__description}>{shopItem?.descripcion}</p>
      <p className={styles.shopItem__price}>{`$ ${shopItem?.precio}`}</p>
    </div>
  );
};

export default GTShopItem;
