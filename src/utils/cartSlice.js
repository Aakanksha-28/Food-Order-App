import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // vanilla(older) Redux => DON"T MUTATE STATE returning was mandatory
      // const newState =[...state];
      // newStat.items.push(action.payload);
      // return newState;

      // Redux Toolkit uses immer behind the scenes
      // we HAVE to mutate the state
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0; // []
      // or return {items:[]};
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
