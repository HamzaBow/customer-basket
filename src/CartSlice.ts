import { createSlice } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";
import { ProductItem } from "./productData";

export interface CartItem {
  productName: string;
  quantity: number;
  unitCost: number;
  discount: number;
}

interface CartItemsObj {
  items: CartItem[];
}
export type CartState = WritableDraft<CartItemsObj>;

export interface RootState {
  cart: CartState;
}

const initialState: CartState = {
  items: [],
};

interface PayloadWrapper {
  payload: ProductItem;
}
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload: productItem }: PayloadWrapper): void => {
      const cartItems = state.items.filter(
        (cartItem: CartItem) => cartItem.productName === productItem.name
      );
      if (cartItems.length > 1) {
        throw new Error(
          "Two products of the same category cannot exist in Cart!"
        );
      }
      if (cartItems.length === 1) {
        throw new Error("Product already in cart!");
      }
      if (cartItems.length === 0) {
        state.items.push({
          productName: productItem.name,
          quantity: 1,
          unitCost: productItem.cost,
          discount: 0,
        });
      }
    },
    incrementQuantity: (state, { payload: name }): void => {
      for (let i = 0; i < state.items.length; i++) {
        if (state.items[i].productName === name) {
          state.items[i].quantity += 1;
          return;
        }
      }
    },
    decrementQuantity: (state, { payload: name }): void => {
      const cartItems = state.items.filter(
        (cartItem: CartItem) => cartItem.productName === name
      );
      if (cartItems.length === 1) {
        if (cartItems[0].quantity === 1) {
          // remove item from cart
          state.items = state.items.filter(
            (cartItem: CartItem) => cartItem.productName !== name
          );
          return;
        }
        for (let i = 0; i < state.items.length; i++) {
          if (state.items[i].productName === name) {
            state.items[i].quantity -= 1;
            return;
          }
        }
      }
      if (cartItems.length > 1) {
        throw new Error(
          "Two products of the same category cannot exist in Cart!"
        );
      }
      if (cartItems.length === 0) {
        throw new Error("Product not in cart!");
      }
    },
    applyDiscounts: (state) => {
      // *** Bread Discount ***
      const breadItems = state.items.filter(
        (cartItem: CartItem) => cartItem.productName === "Bread"
      );
      if (breadItems.length === 1) {
        //customer bought bread
        // check if customer bought 2 Butter
        const butterItems = state.items.filter(
          (cartItem: CartItem) => cartItem.productName === "Butter"
        );
        if (butterItems.length === 1 && butterItems[0].quantity >= 2) {
          // customer bought at least 2 Butter
          for (let i = 0; i < state.items.length; i++) {
            if (state.items[i].productName === "Bread") {
              state.items[i].discount = state.items[i].unitCost * 0.5;
              return;
            }
          }
        } else {
          // customer didn't buy Butter or bought only one
          for (let i = 0; i < state.items.length; i++) {
            if (state.items[i].productName === "Bread") {
              state.items[i].discount = 0;
              return;
            }
          }
        }
      }
      // *** Milk Discount ***
      const milkItems = state.items.filter(
        (cartItem: CartItem) => cartItem.productName === "Milk"
      );
      if (milkItems.length !== 1) {
        return;
      }
      if (milkItems[0].quantity === 4) {
        //customer bought 3 milk
        for (let i = 0; i < state.items.length; i++) {
          if (state.items[i].productName === "Milk") {
            state.items[i].quantity += 1;
            state.items[i].discount = state.items[i].unitCost;
            return;
          }
        }
      } else {
        // remove discount (customer didn't buy 3 milk)
        for (let i = 0; i < state.items.length; i++) {
          if (state.items[i].productName === "Milk") {
            state.items[i].discount = 0;
            return;
          }
        }
      }
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  applyDiscounts,
} = cartSlice.actions;

export default cartSlice.reducer;
