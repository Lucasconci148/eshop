"use client";
import { useState } from "react";
import styles from "./page.module.scss";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const mock = {
  id: 1,
  titulo: "Cámara DSLR",
  descripcion: "Cámara DSLR de alta calidad con enfoque automático rápido.",
  precio: 799.99,
  imagen:
    "https://www.ubuy.com.ar/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9zZW8vQ2Fub24tRU9TLTc3RC1EU0xSLUNhbWVyYS13aXRoLTE4LTEzNW1tLVVTTS1MZW5zXzQ1NDM5OTRlLTgxNzUtNDdiZC04MmE4LTMxYWU2MWI1YzI5YV8xLmNhMTRhN2FhMDg2MDk3OGE0MjdkZmVjOTFhMGZjYjRmLmpwZWc.jpg",
  fav: true,
  rating: 4,
  categoria: "Electrónica",
};

export default function ItemDetail() {
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  const handleClickBack = () => {
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
        <p className={styles.leftSection__title}>{mock.titulo}</p>

        <div className={styles.raitingSection}>
          <div className={styles.star}></div>
          <p className={styles.raitingSection__number}>{mock?.rating}</p>
        </div>
        <hr />
      </div>
      <div className={styles.titleTablet}>Título para Tablet</div>

      {/* <p
        style={{ cursor: "pointer" }}
        className={styles.leftSection__description}
        onClick={handleClickBack}
      >
        Volver
      </p> */}

      <section
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div className={styles.leftSection}>
          {/* imagen container */}
          <div className={styles.imagenContainer}>
            <img
              src={mock?.imagen}
              className={`${styles.img} ${isLoaded ? styles.imgLoaded : ""}`}
              alt="shop-item"
              onLoad={() => setIsLoaded(true)}
            />
          </div>

          <p className={styles.leftSection__title}>Descripcion</p>
          <p className={styles.leftSection__description}>{mock.descripcion}</p>

          <div className={styles.buttonContainer}>
            <Button variant="contained">Comprar</Button>
          </div>
        </div>

        <section className={styles.rightSection}>
          <p className={styles.leftSection__title}>{mock.titulo}</p>

          <div className={styles.raitingSection}>
            <div className={styles.star}></div>
            <p className={styles.raitingSection__number}>{mock?.rating}</p>
          </div>

          <p className={styles.leftSection__description}>
            Calificación 4.5 de 5.177 opiniones
          </p>
          <p
            className={styles.leftSection__description}
          >{`$ ${mock.precio}`}</p>
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
            <Button variant="contained">Comprar</Button>
          </div>
        </section>
      </section>
    </div>
  );
}
