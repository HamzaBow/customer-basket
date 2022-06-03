import { createSlice } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { ProductItem } from "./productData";

export interface CartItem {
  productName: string;
  quantity: number;
}

interface CartItemsObj {
  items: CartItem[]
}
export type CartState = WritableDraft<CartItemsObj>

export interface RootState {
  cart: CartState;
}

const initialState: CartState = {
  items: []
}

interface PayloadWrapper {
  payload: ProductItem;
}
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload: productItem }: PayloadWrapper): void => {
      const cartItems = state.items.filter((cartItem: CartItem) => cartItem.productName === productItem.name)
      if (cartItems.length > 1) {
        throw new Error("Two products of the same category cannot exist in Cart")
      }
      if (cartItems.length === 0) {
        state.items.push({ productName: productItem.name, quantity: 1 })
        return
      }

      // product.length === 1
      // increment quantity of already added product to cart.
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].productName === productItem.name){
          state.items[i].quantity += 1;
        }
      }
    }
  }
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;