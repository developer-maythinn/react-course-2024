import logo from "./logo.svg";
import "./App.css";
import UseReducerShowHide from "./components/UseReducerShowHide";
import { Route, Routes } from "react-router-dom";
import ProductsList from "./pages/productsList";
import ProductDetail from "./pages/productDetail";
import CartList from "./pages/cartList";
import CRUD from "./components/CRUD/CRUD";
import CustomHook from "./components/CustomHook/CustomHook";
import HOC from "./components/HOC/HOC";
import Test from "./components/HOC/Test";

function App() {
  return (
    <div className="App">
      {/* <UseReducerShowHide /> */}

      <Routes>
        <Route path="/products" element={<ProductsList />}></Route>
        <Route path="/products/:id" element={<ProductDetail />}></Route>
        <Route path="/cart" element={<CartList />}></Route>
        <Route path="/crud" element={<CRUD />}></Route>
        <Route path="/custom-hook" element={<CustomHook />}></Route>
        <Route path="/hoc" element={<HOC />}></Route>
      </Routes>
      <Test />
    </div>
  );
}

export default App;
