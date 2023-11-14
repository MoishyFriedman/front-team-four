import { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import { Product } from "../../interface/interfaceDB";
import { Link } from "react-router-dom";

export default function Home() {
  const [categories, setCategories] = useState<string[]>([]);
  const [topFive, setTopFive] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        // const categoriesResult = await axios.get("http://localhost:/");
        // setCategories(categoriesResult.data);
        // const topFiveResult = await axios.get("http://localhost:/");
        // setTopFive(topFiveResult.data);
        // const productsResult = await axios.get("http://localhost:/");
        // setProducts(productsResult.data);
      } catch (error) {
        alert(error);
      }
    }
    getData();
  }, []);

  return (
    <>
      <div>
        {categories.map((category) => (
          <Link to={`/category/?categoryName=${category}`}>
            <Button>{category}</Button>
          </Link>
        ))}
      </div>
      <div>
        {topFive.map((category) => (
          <Link to={`/category/?categoryName=${category}`}>
            <Button>{category}</Button>
          </Link>
        ))}
      </div>
      <div>
        {products.map((product) => (
          <Link to={`/product/?categoryName=${product.product_name}`}>
            <div>
              <div>{product.product_image_url}</div>
              <div>
                <Typography variant="h3">{product.product_name}</Typography>
                <Typography>{product.description}</Typography>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
