import { useState, useEffect } from "react";
import mockData from "../mockData.json";

const fetchMockData = async () => {
  return new Promise<MockDataType>((resolve) => {
    setTimeout(() => resolve(mockData), 500);
  });
};

export interface IShopItem {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  imagen: string;
  rating: number;
  categoria: string;
  fav?: boolean;
}

type MockDataType = IShopItem[];

const useGetProducts = () => {
  const [listOfProducts, setListOfProducts] = useState<MockDataType | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetchMockData();
        setListOfProducts(response);
      } catch (err) {
        setError("Error en el request");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { listOfProducts, loading, error };
};

export default useGetProducts;
