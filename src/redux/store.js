import { configureStore } from "@reduxjs/toolkit";

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export const store = configureStore({
  reducer: rootReducer,
});
