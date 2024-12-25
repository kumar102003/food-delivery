import React from 'react';
import './App.css';
import Home from './screens/Home';
import Navbar from './components/Navbar';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Cart from './screens/Cart';
import MyOrder from './screens/MyOrder'
import CartProvider from './components/ContextReducer';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap-dark-5/dist/css/bootstrap-dark.min.css';  // Corrected Bootstrap Dark 5 CSS import
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // Bootstrap JS import (necessary for components like modals, tooltips)
function App() {
  return (
    <CartProvider>
<Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/myOrder" element={<MyOrder />} />
        {/* <Route exact path="/cart" element={<Cart />} /> */}
      </Routes>
    </Router>
    </CartProvider>
    
  );
}

export default App;
