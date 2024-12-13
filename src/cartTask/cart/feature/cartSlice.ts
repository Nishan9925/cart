import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

interface Cart {
  id: number;
  title: string;
  price: number;
  img: string;
  amount: number;
}

interface CartProps {
  cartItems: Cart[];
  totalAmount: number;
  totalPrice: number;
}

const initialState: CartProps = {
  cartItems: [
    {
      id: 101,
      title: "Samsung Galaxy S8",
      price: 399.99,
      img: "https://images2.imgbox.com/c2/14/zedmXgs6_o.png",
      amount: 1,
    },
    {
      id: 102,
      title: "Google pixel",
      price: 499.99,
      img: "https://images2.imgbox.com/fb/3d/O4TPmhlt_o.png",
      amount: 1,
    },
    {
      id: 103,
      title: "Xiaomi Redmi Note 2",
      price: 699.99,
      img: "https://images2.imgbox.com/4f/3d/WN3GvciF_o.png",
      amount: 1,
    },
    {
      id: 104,
      title: "Samsung Galaxy S7",
      price: 599.99,
      img: "https://images2.imgbox.com/2e/7c/yFsJ4Zkb_o.png",
      amount: 1,
    },
  ],
  totalAmount: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalPrice = 0;
    },
    increaseAmount: (state, action: PayloadAction<{ id: number }>) => {
      const cartItem = state.cartItems.find((item) => item.id === action.payload.id);
      if (cartItem) {
        cartItem.amount = cartItem.amount + 1;
      }
    },
    decreaseAmount: (state, action: PayloadAction<{ id: number }>) => {
      const cartItem = state.cartItems.find((item) => item.id === action.payload.id);
      if (cartItem && cartItem.amount > 1) {
        cartItem.amount = cartItem.amount - 1;
      }
    },
    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
    },
    calcTotalAmount: (state) => {
      let totalAmount = 0;
      let totalPrice = 0;
      state.cartItems.forEach((item => {
        totalAmount += item.amount;
        totalPrice += item.price * item.amount;
      }));
      state.totalAmount = totalAmount;
      state.totalPrice = totalPrice;
    },
  },
});

export const { clearCart, increaseAmount, decreaseAmount, removeItem, calcTotalAmount } = cartSlice.actions;
export default cartSlice.reducer;
