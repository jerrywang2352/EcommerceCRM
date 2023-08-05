import React, { Component } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import AddProducts from "./components/AddProducts"
import Signup from "./components/Signup"
import Login from "./components/Login"
import { ProductsContextProvider } from "./global/ProductsContext"
import { onAuthStateChanged } from "firebase/auth"
import {doc,getDoc} from 'firebase/firestore'
import {auth,db} from './config/Config'

class App extends Component {
  state = {
    user: null
  }

  componentDidMount() {
    getDoc(doc(db,'signup','5HiV6soNXegOBKYZSULMmrwQdIY2')).then(snapshot => {
      console.log(snapshot.data().name)
    })

    onAuthStateChanged(auth,(user) => {
      if (user) {
        getDoc(doc(db,'signup',user.uid)).then(snapshot => {
          this.setState({
            user: snapshot.data().name
          });
        });
      } else {
        this.setState({
          user:null
        }); 
      }
    });
    console.log(this.state.user);
  }

  render() {
    return (
      <ProductsContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home user={this.state.user}/>} />
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
