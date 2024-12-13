import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import CartItem from "./CartItem";
import { clearCart } from "../feature/cartSlice";

function CartContainer() {
  const { cartItems, totalAmount, totalPrice } = useSelector((store: RootState) => store.cart);
  const dispatch: AppDispatch = useDispatch();
  if (totalAmount > 1) {
    return (
      <div>
        <h2>Your Bag</h2>
        <h4>is currently empty</h4>
      </div>
    );
  }

  return (
    <div>
      <h2>Your Bag</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <CartItem {...item} />
        </div>
      ))}
      <p>Total: {totalPrice}</p>
      <button onClick={() => dispatch(clearCart())}>Clear All</button>
    </div>
  );
}

export default CartContainer;
