import { useEffect, useState } from "react";
import { Product } from "../../interface/interfaceDB";
import axios from "axios";

export default function Category() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const categoriesResult = await axios.get("http://localhost:9090/");
        setProducts(categoriesResult.data);
      } catch (error) {
        alert(error);
      }
    }
    getProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div>
          <div>{product.product_image_url}</div>
          <div>{product.product_name}</div>
        </div>
      ))}
    </div>
  );
}
