import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  productName: string;
  quantity: number;
}
const initialState: CartItem[] = []

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload: cartItem }) => {
      state.push(cartItem)
    }
  }
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;