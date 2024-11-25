"use client";
import { useState } from "react";
import styles from "./page.module.scss";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addToChart } from "@/store/shopSlice";
import { RootState } from "@/store/store";
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
        <p className={styles.leftSection__title}>{product?.titulo}</p>

        <div className={styles.raitingSection}>
          <Image
            src="/star.jpg"
            alt="star"
            width={20}
            height={20}
            style={{ marginRight: "2px" }}
          />
          <p className={styles.raitingSection__number}>{product?.rating}</p>
        </div>
        <hr />
      </div>
      <div className={styles.titleTablet}>Título para Tablet</div>

      <section
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div className={styles.leftSection}>
          <div className={styles.imagenContainer}>
            <img
              src={product?.imagen}
              className={`${styles.img} ${isLoaded ? styles.imgLoaded : ""}`}
              alt="shop-item"
              onLoad={() => setIsLoaded(true)}
            />
          </div>

          <p className={styles.leftSection__title}>Descripcion</p>
          <p className={styles.leftSection__description}>
            {product?.descripcion}
          </p>

          <div className={styles.buttonContainer}>
            <Button variant="contained">Comprar</Button>
          </div>
        </div>

        {/* TODO: ESTO PODRIA SER UN COMPONENTE */}
        <section className={styles.rightSection}>
          <p className={styles.leftSection__title}>{product?.titulo}</p>

          <div className={styles.raitingSection}>
            <div className={styles.star}></div>
            <p className={styles.raitingSection__number}>{product?.rating}</p>
          </div>

          <p className={styles.leftSection__description}>
            Calificación 4.5 de 5.177 opiniones
          </p>
          <p
            className={styles.leftSection__description}
          >{`$ ${product?.precio}`}</p>
          <p className={styles.leftSection__description}>
            Ver los medios de pago
            <br /> Llega gratis hoy
          </p>

          <p className={styles.leftSection__description}>
            Más formas de entrega <br /> Devolución gratis
          </p>

          <p className={styles.leftSection__description}>
            Tenés 30 días desde que lo recibís.
          </p>

          <p className={styles.leftSection__description}>Conocer más</p>
          <div className={styles.buttonContainer}>
            <Button variant="contained" onClick={handleAddProduct}>
              Comprar
            </Button>
          </div>
        </section>
        {/* TODO: ESTO PODRIA SER UN COMPONENTE */}
      </section>
    </div>
  );
}
