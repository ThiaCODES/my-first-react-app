import { createSlice } from "@reduxjs/toolkit";
// declare initial state to empty array
const initialState = {
  cartItems: [],
};
//declare the cartSlice value
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { slug, quantity } = action.payload;
      const item = state.cartItems.findIndex((i) => i.slug === slug);
      console.log(item);
      if (item >= 0) {
        state.cartItems[item].quantity += quantity;
      } else {
        state.cartItems.push({ slug, quantity: quantity });
      }
    },
    addToQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.slug === action.payload.slug);
      if (item) {
        item.quantity += 1;
      }
    },
    removeFromQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.slug === action.payload.slug);
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (i) => i.slug !== action.payload.slug
        );
      }
    },
  },
});
export const { addToCart, removeFromQuantity, addToQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
