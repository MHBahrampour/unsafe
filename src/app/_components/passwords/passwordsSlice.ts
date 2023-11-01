import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle", // "idle", "loading", "succeeded", "failed"
  error: null,
};

const passwordsSlice = createSlice({
  name: "passwords",
  initialState: initialState,
  reducers: {},
});

export const {} = passwordsSlice.actions;
export default passwordsSlice.reducer;
