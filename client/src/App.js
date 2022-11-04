import React from 'react';
import './App.css';
import { useParams } from "react-router";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import ProductForm from './components/ProductForm';
import AllProducts from './components/AllProducts';
import ProductDetail from './components/ProductDetail';
import Main from './views/Main';


const App = () => {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/products/:id' element={<ProductDetail/>}></Route>

        </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;