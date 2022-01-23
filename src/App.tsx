import Login from "./components/Login"
import Signup from "./components/Signup"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import { Routes, Route } from "react-router-dom"
import AddProduct from "./components/AddProduct"
import ViewProducts from "./components/ViewProducts"


function App() {

  return (
    <div className="App h-full w-full font-prfnt">
      {/* <Navbar /> */}
      <Sidebar >
        <ViewProducts />
      </Sidebar>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
