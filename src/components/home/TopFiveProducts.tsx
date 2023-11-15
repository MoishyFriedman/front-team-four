import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { Product } from "../../interface/interfaceDB";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function TopFive(itemData: { products: Product[] }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <Typography variant="h5">top five products</Typography>
        <ImageList sx={{ width: 500, height: 450 }}>
          {itemData.products.map((item) => (
            <Link key={item._id} to={`/product/?productId=${item._id}`}>
              <ImageListItem key={item._id}>
                <img srcSet={`${item.product_image_url}?w=248&fit=crop&auto=format&dpr=2 2x`} src={`${item.product_image_url}?w=248&fit=crop&auto=format`} alt={item.title} loading="lazy" />
                <ImageListItemBar key={item._id} title={item.product_name} />
              </ImageListItem>
            </Link>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}
