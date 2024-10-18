import { createSlice } from "@reduxjs/toolkit";
// declare initial state to empty array
const initialState = {
  cartItems: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
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

      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },

    addToQuantity: (state, action) => {
      const item = state.cartItems.find((i) => i.slug === action.payload.slug);
      if (item) {
        item.quantity += 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
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
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
});
export const { addToCart, removeFromQuantity, addToQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
