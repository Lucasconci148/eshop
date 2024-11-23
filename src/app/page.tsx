"use client";
import { useState } from "react";
import styles from "./page.module.scss";
import "react-toastify/dist/ReactToastify.css";
import GTShopItem from "./components/shopItem/shopItem";
import { TextField } from "@mui/material";
import useGetProducts, { Product } from "./hooks/useGetProducts";
import { useRouter } from "next/navigation";
// import { Box, Button, Modal, Typography } from "@mui/material";

export default function Home() {
  const { listOfProducts, loading, error } = useGetProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  // modal
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = listOfProducts?.filter((item: Product) =>
    item.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClickProduct = (item: Product) => {
    // set state
    // redirect
    router.push("/itemDetail");
  };

  return (
    <div className={styles.dashboard}>
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
          {`${filteredProducts?.length} Productos encontrados`}
        </p>
      </div>

      <div className={styles.dashboard__productList}>
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map((item: any, index: number) => (
            <div onClick={() => handleClickProduct(item)} key={index}>
              <GTShopItem shopItem={item} />
            </div>
          ))
        ) : (
          <p className={styles.dashboard__noResults}>
            No se encontraron productos con el término "{searchTerm}"
          </p>
        )}
      </div>

      {/* <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          este deberia ser el carrito
        </div>
      </Modal> */}
    </div>
  );
}
