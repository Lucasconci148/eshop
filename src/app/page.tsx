"use client";
import { useState } from "react";
import styles from "./page.module.scss";
import GTShopItem from "./components/shopItem/shopItem";
import { TextField } from "@mui/material";
import useGetProducts, { IShopItem } from "./hooks/useGetProducts";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setItemSelected } from "@/store/shopSlice";
import LoadingComponent from "./components/Loading/Loading";

export default function Home() {
  const { listOfProducts, loading, error } = useGetProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const dispatch = useDispatch();

  if (loading) return <LoadingComponent />;
  if (error) return <div>Error: {error}</div>;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = listOfProducts?.filter((item: IShopItem) =>
    item.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClickProduct = (item: IShopItem) => {
    dispatch(setItemSelected(item));
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
          filteredProducts.map((item: IShopItem, index: number) => (
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
    </div>
  );
}
