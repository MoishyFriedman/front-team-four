import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { Avatar, Icon } from "@mui/material";
import { Product } from "../../interface/interfaceDB";
import base_url from "../../../helper";
import { useState } from "react";

async function addProduct(userId: string, productId: string) {
  const resp = await axios.put(
    `${base_url}carts/add/${JSON.parse(userId)}${productId}`
  );
  let quantity = resp.data.quantity;
  quantity += 1;
  return quantity;
}

async function lessProduct(userId: string, productId: string) {
  const resp = await axios.put(
    `${base_url}carts/delete/${JSON.parse(userId)}/${productId}`
  );
  let quantity = resp.data.quantity;
  quantity -= 1;
  return quantity;
}

export default function ProductCard(prop: Product) {
  const [count, setCount] = useState(1);
  const userId = localStorage.getItem("userId");
  if (!userId) {
    return null;
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={prop.product_image_url}
        title="product"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {prop.product_name}
        </Typography>

        <Typography gutterBottom variant="h5" component="div">
          {prop.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography gutterBottom variant="h5" component="div">
          {prop.stock_quantity}
          <Button
            onClick={() => {
              addProduct(userId, prop.product_id);
              setCount((count) => (count += 1));
            }}
          >
            <Icon baseClassName="material-icons-two-tone"></Icon>
          </Button>
          <Avatar>{count}</Avatar>
          <Button
            onClick={() => {
              lessProduct(userId, prop.product_id);
              setCount((count) => (count -= 1));
            }}
          >
            <Icon baseClassName="material-icons-two-tone"></Icon>
          </Button>
        </Typography>

        <Button size="small">{prop.price}</Button>
        <Button variant="contained">{prop.price}</Button>

        <Button>
          <Icon baseClassName="material-icons-two-tone"></Icon>
        </Button>
        <Button>
          <Icon baseClassName="material-icons-two-tone"></Icon>
        </Button>
      </CardActions>
    </Card>
  );
}
