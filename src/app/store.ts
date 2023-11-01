import { configureStore } from "@reduxjs/toolkit";
import passwordsReducer from "./_components/passwords/passwordsSlice";

export const store = configureStore({
  reducer: { passwords: passwordsReducer },
});
