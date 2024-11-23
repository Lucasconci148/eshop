import { useState, useEffect } from "react";
import mockData from "../mockData.json";

const fetchMockData = async () => {
  return new Promise<MockDataType>((resolve) => {
    setTimeout(() => resolve(mockData), 500);
  });
};

// TODO: tipo duplicado
export type Product = {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  imagen: string;
  fav?: boolean;
  rating: number;
  categoria: string;
};

type MockDataType = Product[];

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
