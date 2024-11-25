"use client";
import Image from "next/image";
import styles from "./header.module.scss";
import { useEffect, useRef, useState } from "react";
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import EmptyChart from "../emptyChart/emptyChart";
import ChartItem from "../chartItem/chartItem";
import { deleteById, increase, decrement } from "@/store/shopSlice";
import { toast } from "react-toastify";

const GTHeader = () => {
  const [shoppingChartOpen, setShoppingChartOpen] = useState(false);
  let chartCardRef: any = useRef(null);

  const stateChart = useSelector((state: RootState) => state.shopCartState);
  const dispatch = useDispatch();

  const openChart = () => {
    setShoppingChartOpen(!shoppingChartOpen);
  };

  const increseCount = (id: number) => {
    dispatch(increase(id));
  };

  const decreseCount = (id: number) => {
    dispatch(decrement(id));
  };

  const removeItemFromChart = (id: number) => {
    dispatch(deleteById(id));
    toast.error("Producto eliminado!");
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
        <Badge badgeContent={stateChart.chart.length} color="primary">
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
          <div className={styles.chart__title}>Mi Carrito</div>
          <hr />

          {stateChart.chart.length > 0 ? (
            stateChart.chart.map((item: any, index: number) => (
              <ChartItem
                chartItem={item}
                key={index}
                handleAdd={() => increseCount(item.id)}
                handleDecrese={() => decreseCount(item.id)}
                handleDelete={() => removeItemFromChart(item.id)}
              />
            ))
          ) : (
            <EmptyChart />
          )}
        </div>
      )}
    </>
  );
};

export default GTHeader;
