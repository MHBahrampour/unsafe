import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { InitialPasswordsState } from "@/app/_types/commonTypes";
import { RootState } from "@/app/store";

const PASSWORDS_URL = "http://localhost:3500/passwords";

const delay = () => new Promise<void>((res) => setTimeout(() => res(), 800));

const initialState: InitialPasswordsState = {
  data: [],
  status: "idle", // "idle", "loading", "succeeded", "failed"
  error: null,
};

export const fetchPasswords = createAsyncThunk(
  "passwords/fetchPasswords",
  async () => {
    await delay();
    const response = await axios.get(PASSWORDS_URL);
    return response.data;
  }
);

const passwordsSlice = createSlice({
  name: "passwords",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPasswords.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPasswords.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchPasswords.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const selectAllPasswords = (state: RootState) => state.passwords.data;
export const getPasswordsStatus = (state: RootState) => state.passwords.status;
export const getPasswordsError = (state: RootState) => state.passwords.error;

// export const {} = passwordsSlice.actions;

export default passwordsSlice.reducer;
