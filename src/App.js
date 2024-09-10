import logo from "./logo.svg";
import "./App.css";
import UseReducerShowHide from "./components/UseReducerShowHide";
import { Route, Routes } from "react-router-dom";
import ProductsList from "./pages/productsList";
import ProductDetail from "./pages/productDetail";
import CartList from "./pages/cartList";

function App() {
  return (
    <div className="App">
      {/* <UseReducerShowHide /> */}

      <Routes>
        <Route path="/products" element={<ProductsList />}></Route>
        <Route path="/products/:id" element={<ProductDetail />}></Route>
        <Route path="/cart" element={<CartList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
