import { useEffect, useState } from "react";
import { Product } from "../../interface/interfaceDB";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { Link, Box, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function Category() {

  const [products, setProducts] = useState<Product[]>([]);
  const [params] = useSearchParams()
  const [categoryId, setCategoryId] = useState(params.get('categoryId'))
  if (!categoryId) {
    setCategoryId("")
  }
  console.log(categoryId);
  useEffect(() => {
    async function getProducts() {
      try {
        const categoriesResult = await axios.get(`http://localhost:5050/products/allProducts/${categoryId}`);


        setProducts(categoriesResult.data);
      } catch (error) {
        alert(error);
      }
    }
    getProducts();
  }, [categoryId]);

  return (
    <Box width="100%" my={4} display="flex" alignItems="center" gap={4}>
      {products.map((product) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={product.product_image_url}
            title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.product_name}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography> */}
          </CardContent>
          <CardActions>
            {/* <Button size="small">Share</Button> */}
            <Link href="/product">Learn more</Link>
          </CardActions>
        </Card>

      ))}
    </Box>
  );
}
