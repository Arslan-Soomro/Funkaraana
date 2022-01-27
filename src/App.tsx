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
import { useContext, useEffect, useRef, useState } from "react";
import GlobalContext from "./context/global-context";
import Page404 from "./components/Page404";
import Statistics from "./components/Statistics";
import NotificationMsg from "./components/NotificationMsg";
import NotificationStack from "./components/NotificationStack";
import { pushNotification_ACT, removeNotification_ACT, toggleNotificationAdded_ACT } from "./context/global-actions";
import SmartSignup from "./components/SmartSignup";
import SmartLogin from "./components/SmartLogin";

//TODO Cancel out sending description to cart items

//TODO Connect front-end with backend

/*
TODO Improvements that can be done if extra time
make notifications animate
*/

function App() {

  const [state, dispatch] = useContext(GlobalContext);

  useEffect(() => {

    if(state.notificationAdded){
      //Set Notification Added to False
      dispatch({type: toggleNotificationAdded_ACT});

      //After Some Time remove the notification
      setTimeout(() => {
        dispatch({type: removeNotification_ACT});
      }, 2000);
    }

  }, [state.notificationAdded]);

  return (
    <div className="App h-full w-full font-prfnt">
      
      <NotificationStack msgs={state.notifications} />

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
          path="/seller/statistics"
          element={<Sidebar><Statistics /></Sidebar>}
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
              <SmartSignup />
            </Navbar>
          }
        />
        <Route
          path="/login"
          element={
            <Navbar>
              <SmartLogin />
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
