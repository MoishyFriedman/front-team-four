export interface Category {
  _id: string;
  category_name: string;
  view: number;
}

export interface IProduct {
  _id: string;
  product_name: string;
  product_image_url: string;
  description: string;
  category_id: string;
  price: number;
  stock_quantity: number;
  view: number;
  owen_properties: {
    key1: string;
    key2: string;
  };
  coordinates: string[];
}
