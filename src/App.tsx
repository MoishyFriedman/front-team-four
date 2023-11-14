import "./App.css";
import { createBrowserRouter, RouterProvider, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import Product from "./components/product/Product";
import Category from "./components/category/Category";
import Compare from "./components/compareProducts/Compare";
import Cart from "./components/cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/category/compare",
    element: <Compare />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
