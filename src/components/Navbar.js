import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge'
import Modal from "../Model";
import Cart from "../screens/Cart";

import { useCart } from "./ContextReducer";
const Navbar = () => {
 
  const [cartView , setCartView] = useState()
  let data = useCart();
const navigate = useNavigate();
 const  handleLogout = ()=>{
localStorage.removeItem("authToken");
navigate("/login")
 }
 const setCart = ()=>{
 setCartView(false);
  navigate("/")
 }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fst-italic" to="/">
            GoFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {(localStorage.getItem("authToken"))?
              <li>
              <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/myOrder"
                >
                  MyOrders
                </Link>
              </li>
              :" "}
            </ul>
       {(!localStorage.getItem("authToken"))?
            <div className="d-flex">
              <Link className="btn bg-white text-success mx-1" to="/login">
                Login
              </Link>
              <Link className="btn bg-white text-success mx-1" to="/signup">
                Signup
              </Link>
            </div>
            :
            <div>
            <Link className="btn bg-white text-success mx-2" onClick={()=>setCartView(true)} to='/cart'>
              My Cart 
              <Badge pill bg="danger mx-2">{data.length}</Badge>
            </Link>
            {cartView? <Modal onClose={setCart}><Cart/></Modal>:null}
            <div className="btn bg-white text-danger mx-2" onClick={handleLogout}>
              Logout
            </div>
            </div>
            }
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;