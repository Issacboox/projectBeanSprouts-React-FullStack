// import React from 'react';

import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";



const Navbar = () => {
  const {openCart, cartQuantity} = useShoppingCart()
  return (
    <div className="navbar">
      <div className="user-info">
        <span className='text-lg'>Maruko Channn</span>
        <div className="user-profile">
          <img
            src="https://cdn-icons-png.flaticon.com/512/147/147137.png"
            alt="User Icon"
            width="40"
            height="40"
          />
        </div>
      </div>
      {cartQuantity > 0 && (
      <Button onClick={openCart} 
              style={{ width: "3rem", height:"3rem", position:"relative", right:"250px"}} 
              variant="outline-primary" className="rounded-cicle buttonCart" 
      >
        <img
            src="https://img.lovepik.com/free-png/20210918/lovepik-shopping-cart-png-image_400246975_wh1200.png"
            alt="User Icon"
            width="40"
            height="40"
          />
        <div className="rounded-circle bg-danger d-flex justify-content-center align-item-center" 
        style={{
          color: "white",
          width: "1.5 rem",
          height: "1.5 rem",
          position:"absolute",
          bottom:0,
          right:0,
          transform: "translate(25%, 25%)",
        }}>
          {cartQuantity}
        </div>
      </Button>
       )}
    </div>
  );
};

export default Navbar;
