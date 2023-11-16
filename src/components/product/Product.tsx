import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "@mui/material/Link";
import MapComponent from "./map/MapStor";

interface IProduct {
  product_name: string;
  product_image_url: string;
  description: string;
  category_id: string;
  price: number;
  stock_quantity: number;
  view: number;
}

export default function Product() {
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const getProduct = async (id: string) => {
      const res = await axios(`http://localhost:9090/${id}`);
      setProduct(res.data);
    };
    getProduct("123");
  }, []);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={product?.product_image_url} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product?.product_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product?.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product?.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <AddShoppingCartIcon />
        </Button>
        <Link href="../compareProducts">Compare product</Link>
      </CardActions>
    </Card>
  );
}
