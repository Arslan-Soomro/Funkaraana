import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import ViewProducts from "./components/ViewProducts";
import Hero from "./components/Hero";
import ProductListing from "./components/ProductListing";
import Categories from "./components/Categories";
import SmartCategory from "./components/SmartCategory";
import Home from "./components/pages/Home";
import SmartProductListing from "./components/SmartProductListing";
import SmartCart from "./components/SmartCart";
import { useContext, useEffect } from "react";
import GlobalContext from "./context/global-context";
import Page404 from "./components/Page404";

//TODO Make the Cart Functional

function App() {
  const [state, dispatch] = useContext(GlobalContext);

  return (
    <div className="App h-full w-full font-prfnt">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/prod/:id"
          element={
            <Navbar>
              <SmartProductListing />
            </Navbar>
          }
        />
        <Route
          path="/cart"
          element={
            <Navbar>
              <SmartCart />
            </Navbar>
          }
        />
        <Route
          path="/products"
          element={
            <Sidebar>
              <AddProduct />
            </Sidebar>
          }
        />
        <Route
          path="/prodview"
          element={
            <Sidebar>
              <ViewProducts />
            </Sidebar>
          }
        />
        <Route
          path="/signup"
          element={
            <Navbar>
              <Signup />
            </Navbar>
          }
        />
        <Route
          path="/login"
          element={
            <Navbar>
              <Login />
            </Navbar>
          }
        />
        {/* For Routes That doesn't Exist */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
