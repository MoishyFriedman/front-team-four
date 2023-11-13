import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import axios from "axios";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [topFive, setTopFive] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const categoriesResult = await axios.get("http://localhost:5080/");
      setCategories(categoriesResult.data);
      const topFiveResult = await axios.get("http://localhost:5080/");
      setTopFive(topFiveResult.data);
      const productsResult = await axios.get("http://localhost:5080/");
      setProducts(productsResult.data);
    }
    getData();
  }, []);

  return (
    <>
      <div>
        {categories.map((category) => (
          <Button>{category}</Button>
        ))}
      </div>
      <div>
        {topFive.map((category) => (
          <Button>{category}</Button>
        ))}
      </div>
      <div>
        {products.map((product) => (
          <Button>{product}</Button>
        ))}
      </div>
    </>
  );
}
