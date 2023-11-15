import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import Product from "./components/product/Product";
import Category from "./components/category/Category";
import Compare from "./components/compareProducts/Compare";
import Cart from "./components/cart/Cart";
import Header from "./components/Header&bottom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/product" element={<Product />} />
            <Route path="/category" element={<Category />} />
            <Route path="/category/compare" element={<Compare />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
