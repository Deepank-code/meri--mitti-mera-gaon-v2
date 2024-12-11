import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartReducerInitalStateType } from "../../types/reducer-type";
import { CartItem } from "../../types/types";

const initialState: CartReducerInitalStateType = {
  loading: false,
  cartItems: [],
  subTotal: 0,
  tax: 0,
  shippingCharges: 0,
  discount: 0,
  total: 0,
  shippingInfo: {
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: 0,
  },
};

export const cartReducer = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.loading = true;
      state.cartItems.push(action.payload);
      state.loading = false;
    },
    removeCartItems: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.cartItems = state.cartItems.filter(
        (i) => i.productId !== action.payload
      );
      state.loading = false;
    },
  },
});

export const { addToCart, removeCartItems } = cartReducer.actions;
