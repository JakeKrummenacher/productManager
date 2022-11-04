import React from 'react';
import PersonForm from './components/PersonForm'
import './App.css';
import AllProducts from './components/AllProducts';
import { useParams } from "react-router";
import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import ProductForm from './components/ProductForm';

const Index = (props) => {
  return (
    <div>
      <h1>Create New Product:</h1>
      <ProductForm/>
      <h1>All Available Products:</h1>
      <AllProducts/>
    </div>
  );
}

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>}></Route>

        </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;