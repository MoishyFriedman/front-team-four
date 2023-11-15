import { useEffect, useState } from "react";
import { Button, Typography } from "@mui/material";
import axios from "axios";
import { Product, Category } from "../../interface/interfaceDB";
import { Link } from "react-router-dom";

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [topFive, setTopFive] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const categoriesResult = await axios.get("http://localhost:4000/products/categories");
        setCategories(categoriesResult.data);
        const topFiveResult = await axios.get("http://localhost:4000/products/topCategories");
        setTopFive(topFiveResult.data);
        // const productsResult = await axios.get("http://localhost::4000/products");
        // setProducts(productsResult.data);
      } catch (error) {
        alert(error);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <div>
        {categories.map((category) => (
          <Link id={category._id} to={`/category/?categoryId=${category._id}`}>
            <Button id={category._id}>{category.category_name}</Button>
          </Link>
        ))}
      </div>
      <div>
        {topFive.map((category) => (
          <Link id={category._id} to={`/category/?categoryId=${category._id}`}>
            <Button id={category._id}>{category.category_name}</Button>
          </Link>
        ))}
      </div>
      <div>
        {products.map((product) => (
          <Link id={product._id} to={`/product/?productId=${product._id}`}>
            <div>
              <div>{product.product_image_url}</div>
              <div>
                <Typography id={product._id} variant="h3">
                  {product.product_name}
                </Typography>
                <Typography id={product._id}>{product.description}</Typography>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
