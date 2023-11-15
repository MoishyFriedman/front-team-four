import { useEffect, useState } from "react";
import { Box, Button, ListItemButton, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { Product, Category } from "../../interface/interfaceDB";
import { Link } from "react-router-dom";
import base_url from "../../../helper";
import TopFive from "./TopFiveProducts";

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [topFiveCategories, setTopFiveCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        const categoriesResult = await axios.get(`${base_url}products/categories`);
        setCategories(categoriesResult.data);
        const topFiveResult = await axios.get(`${base_url}products/topCategories`);
        setTopFiveCategories(topFiveResult.data);
        const productsResult = await axios.get(`${base_url}products/topProducts`);
        setProducts(productsResult.data);
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
          <Link key={category._id} to={`/category/?categoryId=${category._id}`}>
            <Button key={category._id}>{category.category_name}</Button>
          </Link>
        ))}
      </div>
      <Box sx={{ height: "50px" }}></Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box>
          <Typography variant="h5">top five categories</Typography>
          {topFiveCategories.map((category) => (
            <Link key={category._id} to={`/category/?categoryId=${category._id}`}>
              <ListItemButton key={category._id} component="a" href="#simple-list">
                <ListItemText key={category._id} primary={category.category_name} />
              </ListItemButton>
            </Link>
          ))}
        </Box>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Box>
          <TopFive products={products} />
        </Box>
      </Box>
    </>
  );
}
