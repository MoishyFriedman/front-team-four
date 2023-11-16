import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { IProduct } from "../../interface/interfaceDB";
import { useNavigate } from "react-router-dom";
import { Box, Card, Typography } from "@mui/material";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

export default function TopFive(itemData: { products: IProduct[] }) {
  const navigate = useNavigate();
  const productContext = useContext(ProductContext);

  function handelNavAndContext(index: number) {
    console.log(index);
    if (!productContext) return null;
    const { product, setProduct } = productContext;
    setProduct(itemData.products[index]);
    console.log(product);
    product && navigate(`/product/?productId=${itemData.products[index]._id}`)
  }
  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <Typography variant="h5">top five products</Typography>
        <ImageList sx={{ width: 500, height: 450 }}>
          {itemData.products.map((item, index) => (
            <Card onClick={() => handelNavAndContext(index)}>
              <ImageListItem key={item._id}>
                <img srcSet={`${item.product_image_url}?w=248&fit=crop&auto=format&dpr=2 2x`} src={`${item.product_image_url}?w=248&fit=crop&auto=format`} alt={item.product_name} loading="lazy" />
                <ImageListItemBar key={item._id} title={item.product_name} />
              </ImageListItem>
            </Card>
          ))}
        </ImageList>
      </Box>
    </Box >
  );
}
