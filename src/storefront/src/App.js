import React, { Component } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import AddProducts from "./components/AddProducts"
import Signup from "./components/Signup"
import Login from "./components/Login"
import { ProductsContextProvider } from "./global/ProductsContext"

class App extends Component {
  render() {
    return (
      <ProductsContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/addproducts" element={<AddProducts />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ProductsContextProvider>
    );
  }
}

export default App;
