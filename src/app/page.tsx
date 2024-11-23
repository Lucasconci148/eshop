"use client";
import styles from "./page.module.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GTShopItem from "./components/shopItem/shopItem";
import { TextField } from "@mui/material";
import useGetProducts from "./hooks/useGetProducts";

export default function Home() {
  const { listOfProducts, loading, error } = useGetProducts();

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <div className={styles.dashboard}>
      <ToastContainer />
      <p className={styles.dashboard__title}>Titulo</p>
      <p className={styles.dashboard__content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est
        quae libero nobis, qui itaque amet ratione exercitationem tenetur velit
        ut officia quaerat voluptates impedit dolor molestias? Minus, facere
        inventore? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Distinctio est quae libero nobis
      </p>

      <p className={styles.dashboard__search__title}>Buscar</p>
      <div className={styles.dashboard__search__container}>
        <TextField
          id="outlined-basic"
          label="Ingrese un nombre"
          variant="outlined"
          onChange={handleChange}
          style={{ backgroundColor: "white" }}
        />
        <p className={styles.dashboard__search__results}>
          {`${listOfProducts?.length} Productos`}
        </p>
      </div>

      <div className={styles.dashboard__productList}>
        {listOfProducts?.map((item: any, index: number) => (
          <GTShopItem key={index} shopItem={item} />
        ))}
      </div>
    </div>
  );
}
