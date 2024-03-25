import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartIsVisible: false,
    isCheckout: false,
    isSubmitting: false,
  },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    toggleIsCheckout(state) {
      state.isCheckout = !state.isCheckout;
    },
    setIsSubmitting(state, action) {
      state.isSubmitting = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
