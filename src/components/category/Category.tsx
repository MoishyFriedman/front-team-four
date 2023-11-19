import { useContext, useEffect, useState } from "react";
import { IProduct } from "../../interface/interfaceDB";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ProductContext } from "../../context/ProductContext";
import base_url from "../../../helper";

export default function Category() {
  const navigate = useNavigate();
  const productContext = useContext(ProductContext);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [params] = useSearchParams();
  const [categoryId, setCategoryId] = useState(params.get("categoryId"));

  if (!categoryId) {
    setCategoryId("");
  }

  useEffect(() => {
    async function getProducts() {
      try {
        const categoriesResult = await axios.get(`${base_url}products/allProducts/${categoryId}`);
        setProducts(categoriesResult.data);
      } catch (error) {
        alert(error);
      }
    }
    getProducts();
  }, [categoryId]);

  function handelNavAndContext(index: number) {
    if (!productContext) return null;
    const { product, setProduct } = productContext;
    setProduct(products[index]);
    console.log(product);
    product && navigate("/product");
  }

  return (
    <Box width="100%" my={4} display="flex" alignItems="center" gap={4}>
      {products.map((item, index) => (
        <Card sx={{ maxWidth: 345 }} onClick={() => handelNavAndContext(index)}>
          <CardMedia sx={{ height: 140 }} image={item.product_image_url} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.product_name}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
