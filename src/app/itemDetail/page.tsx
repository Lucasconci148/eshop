"use client";
import { useState } from "react";
import styles from "./page.module.scss";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addToChart } from "@/store/shopSlice";
import { RootState } from "@/store/store";
import DesktopDetail from "./components/desktopDetail/desktopDetail";
import SmallHeader from "./components/smallHeader/smallHeader";
import MidleHeader from "./components/midelHeader/midleHeader";
import Image from "next/image";

export default function ItemDetail() {
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const stateChart = useSelector((state: RootState) => state.shopCartState);
  const product = stateChart.itemSelected;

  const handleClickBack = () => {
    router.push("/");
  };

  const handleAddProductToFav = () => {
    toast.success("Producto Agregado a favoritos!");
  };

  const handleAddProduct = () => {
    toast.success("Producto Agregado a tu carrito!");
    if (product) {
      dispatch(addToChart(product));
    }
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <p
        style={{ cursor: "pointer" }}
        className={styles.leftSection__description}
        onClick={handleClickBack}
      >
        Volver
      </p>

      <div className={styles.titleMobile}>
        <SmallHeader product={product} />
      </div>

      <div className={styles.titleTablet}>
        <MidleHeader product={product} />
      </div>

      <div className={styles.itemDetail}>
        <section className={styles.leftSection}>
          <div className={styles.leftSection__imagenContainer}>
            <img
              src={product?.imagen}
              className={`${styles.img} ${isLoaded ? styles.imgLoaded : ""}`}
              alt="shop-item"
              onLoad={() => setIsLoaded(true)}
            />
          </div>

          <div className={styles.favSpace}>
            <p className={styles.leftSection__title}>Descripcion</p>

            <Image
              src="/like.webp"
              alt="like-icon"
              width={30}
              height={30}
              onClick={handleAddProductToFav}
              style={{ marginTop: "20px", cursor: "pointer" }}
            />
          </div>

          <p className={styles.leftSection__description}>
            {product?.descripcion}
          </p>

          <div className={styles.leftSection__buttonContainer}>
            <Button variant="contained" onClick={handleAddProduct}>
              Comprar
            </Button>
          </div>
        </section>

        <section className={styles.rightSection}>
          <DesktopDetail
            product={product}
            handleAddProduct={handleAddProduct}
          />
        </section>
      </div>
    </div>
  );
}
