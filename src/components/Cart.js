import React from "react";
import Nav from "./NavBar";
import { Button } from 'react-bootstrap';
import { useSelector } from "react-redux";

function Cart({ message, count, itemName }) {
  const orders = useSelector(state => state.addedItems);
  console.log(orders);
  return (
    <>
      <Nav />
      <p style={{ textAlign: "center", fontSize: "1.3em", marginTop: "50px" }}>Your Order details</p>
      <div style={{ margin: "auto", width: "18%" }}>
        <ul style={{ listStyleType: "none", border: "1px solid #fff", padding: 0, margin: 0 }}>
          <li style={{ backgroundColor: "#ffc107", color: "white", fontSize: "20px", padding: "20px" }}>Buffet</li>
          {orders.map((item, index) => {
            return (
              <li key={index} style={{ fontSize: "15px", padding: "20px", borderBottom: "1px solid #eee" }}>
                <p style={{ margin: 0 }}>{item.name}</p>
                <p style={{ color: "grey", margin: 0 }}>{item.quantity} x &#8377;{item.price}<span style={{ marginLeft: "120px" }}>{item.quantity*item.price}</span></p>
              </li>
            );
          })}
        </ul>
        <p style={{ fontSize: "14px", padding: "20px", fontWeight: "700", margin: 0 }}>Grand Total<spam style={{ marginLeft: "120px" }}>{useSelector(state => state.total)}</spam></p>
        <Button variant="none" type="button" to="/Cart" style={{ color: "#ffc107", marginTop: "10px", borderColor: 'yellow', boxShadow: 'none', borderRadius: "25px", padding: "7px 70px" }}>
          Confirm Order
        </Button>
      </div>  
    </>
  );
}

export default Cart;
