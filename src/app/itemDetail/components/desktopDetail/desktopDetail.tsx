import { Button } from "@mui/material";
import styles from "./desktopDetail.module.scss";
import Image from "next/image";

const DesktopDetail = ({ product, handleAddProduct }: any) => {
  return (
    <>
      <p className={styles.desktopDetail__title}>{product?.titulo}</p>

      <div className={styles.desktopDetail__raitingSection}>
        <Image
          src="/star.jpg"
          alt="star"
          width={20}
          height={20}
          style={{ marginRight: "2px" }}
        />
        <p className={styles.desktopDetail__raitingSection__number}>
          {product?.rating}
        </p>
      </div>

      <p className={styles.desktopDetail__description}>
        Calificación 4.5 de 5.177 opiniones
      </p>

      <p
        className={styles.desktopDetail__description}
      >{`$ ${product?.precio}`}</p>
      <p className={styles.desktopDetail__description}>
        Ver los medios de pago
        <br /> Llega gratis hoy
      </p>

      <p className={styles.desktopDetail__description}>
        Más formas de entrega <br /> Devolución gratis
      </p>

      <p className={styles.desktopDetail__description}>
        Tenés 30 días desde que lo recibís.
      </p>

      <p className={styles.desktopDetail__description}>Conocer más</p>
      <div className={styles.desktopDetail__buttonContainer}>
        <Button variant="contained" onClick={handleAddProduct}>
          Comprar
        </Button>
      </div>
    </>
  );
};

export default DesktopDetail;
