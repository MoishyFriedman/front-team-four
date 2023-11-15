import { useEffect, useState } from "react";
import { Product } from "../../interface/interfaceDB";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

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
    <div>
      {products.map((product) => (
        <div >
          <div>{product.product_image_url}</div>
          <div>{product.product_name}</div>
        </div>
      ))}
    </div>
  );
}
