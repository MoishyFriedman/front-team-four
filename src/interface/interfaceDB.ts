export interface Category {
  id: string;
  category_name: string;
  view: number;
}

export interface Product {
  id: string;
  product_name: string;
  product_image_url: string;
  description: string;
  category_id: string;
  price: number;
  stock_quantity: number;
  view: number;
}
