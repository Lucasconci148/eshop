"use client";
import Image from "next/image";
import styles from "./header.module.scss";
import { useEffect, useRef, useState } from "react";
import { Badge } from "@mui/material";

const GTHeader = () => {
  const [shoppingChartOpen, setShoppingChartOpen] = useState(false);
  let chartCardRef: any = useRef(null);

  const openChart = () => {
    setShoppingChartOpen(!shoppingChartOpen);
  };

  useEffect(() => {
    let handler = (event: Event) => {
      if (
        chartCardRef.current &&
        !chartCardRef.current.contains(event.target)
      ) {
        setShoppingChartOpen(chartCardRef.current.contains(event.target));
      }
    };

    document.addEventListener("mousedown", handler);
  }, [chartCardRef]);

  return (
    <>
      <div className={styles.dashboard__header}>
        <Badge badgeContent={4} color="primary">
          <Image
            src="/cart.png"
            alt="Carrito"
            width={25}
            height={25}
            style={{ cursor: "pointer" }}
            onClick={openChart}
          />
        </Badge>
      </div>
      {shoppingChartOpen && (
        <div
          className={styles.options}
          ref={(imageElement: HTMLImageElement) => {
            chartCardRef.current = imageElement;
          }}
        >
          <Image src="/cart.png" alt="Carrito" width={25} height={25} />
        </div>
      )}
    </>
  );
};

export default GTHeader;
