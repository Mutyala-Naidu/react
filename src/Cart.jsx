// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { incrementQuantity, decrementQuantity, removeFromCart } from './store';


// function Cart() {
//   // Access the cart state from the Redux store
//   const cartList = useSelector(state => state.cart);
//   const dispatch = useDispatch();
  

//   return (
//     <>
//       <h1>Shopping Cart</h1>
//       {cartList.length > 0 ? (
//         <ul>
//           {cartList.map((item, index) => (
//             <li key={index}>
             
//               <p>
//                 {item.name}
//                 Price: {item.price}
//                 <button onClick={() => dispatch(decrementQuantity(item.name))}>-</button>
//                 Quantity: {item.quantity}
//                 <button onClick={() => dispatch(incrementQuantity(item.name))}>+</button>
//                 <button onClick={() => dispatch(removeFromCart(item.name))}>Remove</button>
//               </p>
              
//             </li>
//           ))}
//         </ul>
        
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </>
//   );
// }

// export default Cart;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from './store';

function Cart() {
  // Access the cart state from the Redux store
  const cartList = useSelector(state => state.cart);
  const dispatch = useDispatch();


const [couponCode, setCouponCode] = useState('');
const [couponDiscountPercentage, setCouponDiscountPercentage] = useState(0);
const handleApplyCoupon = () => {
  switch (couponCode){
    case 'NAIDU10':
      setCouponDiscountPercentage(10);
      break;
    case 'NAIDU20':
      setCouponDiscountPercentage(20);
      break;
    default:
      setCouponDiscountPercentage(0);
      break;
  }
}


  const [discount, setDiscount] = useState(0); 

  const calculatePrices = () => {
    const total = cartList.reduce((acc, item) => acc + item.price * item.quantity, 0);
    let discountedTotal = total*discount/100;
    let coupon = total * couponDiscountPercentage/100;
    let discountedPrice = total-discountedTotal-coupon;

    return { total, discountedTotal, discountedPrice, coupon };
  };

  const { total, discountedTotal, discountedPrice, coupon } = calculatePrices();

  return (
    <>
      <h1>Shopping Cart</h1>
      {cartList.length > 0 ? (
        <>
          <ul>
            {cartList.map((item, index) => (
              <li key={index}>
                
                <p>
                {item.name}
                Price: {item.price}
                  <button onClick={() => dispatch(decrementQuantity(item.name))}>-</button>
                  Quantity: {item.quantity}
                  <button onClick={() => dispatch(incrementQuantity(item.name))}>+</button>
                  <button onClick={() => dispatch(removeFromCart(item.name))}>Remove</button>
                </p>
              </li>
            ))}
          </ul>

          {/* Display the total and discount information here, outside the item loop */}
          <p>Total Amount for All Products: ${total.toFixed(2)}</p>
          <button onClick={() => setDiscount(10)}>Apply 10% Discount</button>
          <button onClick={() => setDiscount(20)}>Apply 20% Discount</button>
          <button onClick={() => setDiscount(30)}>Apply 30% Discount</button>
          <p>Discounted Amount: ${discountedTotal.toFixed(2)}</p>
          <p>coupon discount amount:${coupon.toFixed(2)}</p>
          <p>Discount Applied: {discount+couponDiscountPercentage}%</p>
          <p>Customer To Pay: ${discountedPrice.toFixed(2)}</p>
          {/* <button style={{ color: "white", backgroundColor: "green", padding: "10px 20px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
  Purchase
</button><br></br> */}

            <input type='text' value={couponCode} onChange={(e)=>setCouponCode(e.target.value)} placeholder='enter coupon code'/>
            <button onClick={handleApplyCoupon}>apply coupon</button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </>
  );
}

export default Cart;