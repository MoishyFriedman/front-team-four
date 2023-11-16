import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useContext, useEffect, useState } from 'react';
import Link from '@mui/material/Link';
import { ProductContext } from '../../context/ProductContext';
import { IProduct } from '../../interface/interfaceDB';
import { Box } from '@mui/material';

export default function Product() {
  const productContext = useContext(ProductContext);
  const [thisProduct, setThisProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const getProduct = () => {
      if (!productContext) return null;
      const { product } = productContext;
      setThisProduct(product)
    }
    getProduct()
  }, [])
  return (
    <Box textAlign= "center">
    <Card sx={{ maxWidth: 345} }>
      <CardMedia
        sx={{ height: 140 }}
        image={thisProduct?.product_image_url}
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {thisProduct?.product_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {thisProduct?.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {thisProduct?.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <AddShoppingCartIcon />
        </Button>
        <Link href="../compareProducts">Compare product</Link>
      </CardActions>
      </Card>
    </Box>
  );
}
