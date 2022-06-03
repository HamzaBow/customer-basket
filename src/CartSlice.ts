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
    
  }
})


export default cartSlice.reducer;