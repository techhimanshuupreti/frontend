import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import RegisterComponent from './components/RegisterComponent';
import CategoryComponent from './components/CategoryComponent';
import SubcategoryComponent from './components/SubcategoryComponent';
import ProductComponent from './components/ProductComponent';
import LoginComponent from './components/LoginComponent';
import HomeComponent from './components/HomeComponent';

function App () {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<LoginComponent/>} />
          <Route path="/home" element={<HomeComponent/>} />
          <Route path="/register" element={<RegisterComponent/>} />
          <Route path="/categories" element={<CategoryComponent/>} />
          <Route path="/subcategories" element={<SubcategoryComponent/>} />
          <Route path="/products" element={<ProductComponent/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;