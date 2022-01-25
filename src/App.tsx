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
import SmartCategory from "./components/SmartCategory"


function App() {
  return (
    <div className="App h-full w-full font-prfnt">
      <SmartCategory />
      
      <Routes>
        <Route path="/home" element={<Navbar><Hero /></Navbar>} />
        <Route path="/prod" element={<Navbar><ProductListing /></Navbar>} />
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
            <>
              <Navbar />
              <Signup />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
