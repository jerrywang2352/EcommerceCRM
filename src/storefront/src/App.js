import React, {Component} from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import AddProducts from './components/AddProducts'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path = '/' element={<Home/>} />
          <Route path='/addproducts' element={<AddProducts/>}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;