import React from 'react';
import './Cart.css';

const Cart = (props) => {
  const { cart, setCart } = props.cart;
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);
  let shippingCost = 0;
  if (totalPrice > 200) shippingCost = 0;
  else if (totalPrice > 100) shippingCost = 6;
  else if (totalPrice > 0) shippingCost = 12.99;
  const formatNumber = (num) => +num.toFixed(2);
  const tax = formatNumber(totalPrice / 20);
  const priceWithShipping = formatNumber(totalPrice + shippingCost + tax);
  return (
    <div className='cart'>
      <h2>Order Summery</h2>
      <h4>Items Orderd : {cart.length}</h4>
      <h4>Product Price : {totalPrice}</h4>
      <h4>Shipping Cost : ${shippingCost}</h4>
      <h4>Tax + Vat : {tax}</h4>
      <h4>Total Price : {priceWithShipping}</h4>
    </div>
  );
};

export default Cart;
