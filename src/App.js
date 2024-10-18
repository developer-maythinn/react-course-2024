import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductsList from "./pages/productsList";
import ProductDetail from "./pages/productDetail";
import CartList from "./pages/cartList";
import CustomHook from "./components/CustomHook/CustomHook";
import HOC from "./components/HOC/HOC";
import Hooks from "./pages/hooks";
import HookDetail from "./pages/hooks/hookDetail";
import MiniProjects from "./pages/mini-projects";
import Nav from "./components/Nav";
import ThemeContextProvider from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      {/* <UseReducerShowHide /> */}
      <ThemeContextProvider>
        <AuthContextProvider>
          <Nav />
          <ThemeToggle />
          <Routes>
            <Route path="/products" element={<ProductsList />}></Route>
            <Route path="/products/:id" element={<ProductDetail />}></Route>
            <Route path="/cart" element={<CartList />}></Route>

            <Route path="/custom-hook" element={<CustomHook />}></Route>
            <Route path="/hoc" element={<HOC />}></Route>
            <Route path="/hooks" element={<Hooks />}></Route>
            <Route path="/hooks/:id" element={<HookDetail />}></Route>

            <Route path="/mini-projects" element={<MiniProjects />}></Route>
          </Routes>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
