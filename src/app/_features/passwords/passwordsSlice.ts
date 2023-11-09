import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { InitialPasswordsState, Passwords } from "@/app/_types/commonTypes";
import { RootState } from "@/app/store";

const PASSWORDS_URL = "http://localhost:3500/passwords";

const delay = () => new Promise<void>((res) => setTimeout(() => res(), 800));

const initialState: InitialPasswordsState = {
  data: [],
  status: "idle", // "idle", "loading", "succeeded", "failed"
  error: null,
  selecetedId: null,
};

export const fetchPasswords = createAsyncThunk(
  "passwords/fetchPasswords",
  async () => {
    await delay();
    const response = await axios.get(PASSWORDS_URL);
    return response.data;
  }
);

export const addPassword = createAsyncThunk(
  "posts/addPassword",
  async (newPassword: Passwords) => {
    const response = await axios.post(PASSWORDS_URL, newPassword);
    return response.data;
  }
);

export const editPassword = createAsyncThunk(
  "posts/editPassword",
  async (editedPassword: Passwords) => {
    const response = await axios.put(
      `${PASSWORDS_URL}/${editedPassword.id}`,
      editedPassword
    );
    return response.data;
  }
);

export const deletePassword = createAsyncThunk(
  "posts/deletePassword",
  async (deletedPassword: Passwords) => {
    try {
      const response = await axios.delete(
        `${PASSWORDS_URL}/${deletedPassword.id}`
      );
      if (response?.status === 200) return deletedPassword;
      return `${response?.status}: ${response?.statusText}`;
    } catch (err: any) {
      return err.message;
    }
  }
);

const passwordsSlice = createSlice({
  name: "passwords",
  initialState,
  reducers: {
    updateSelecetedId: (state, action) => {
      state.selecetedId = action.payload;
    },
  },
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
      })
      .addCase(
        addPassword.fulfilled,
        (state, action: PayloadAction<Passwords>) => {
          state.data.push(action.payload);
        }
      )
      .addCase(
        editPassword.fulfilled,
        (state, action: PayloadAction<Passwords>) => {
          const editedPasswordId = action.payload.id;
          const data = state.data.filter(
            (password) => password.id !== editedPasswordId
          );
          state.data = [...data, action.payload];
        }
      )
      .addCase(deletePassword.fulfilled, (state, action) => {
        const deletedPasswordId = action.payload.id;
        const data = state.data.filter((post) => post.id !== deletedPasswordId);
        state.data = data;
      });
  },
});

export const getAllPasswords = (state: RootState) => state.passwords.data;
export const getPasswordsStatus = (state: RootState) => state.passwords.status;
export const getPasswordsError = (state: RootState) => state.passwords.error;
export const getSelectedPassword = (state: RootState) =>
  state.passwords.data.find(
    (password) => password.id === state.passwords.selecetedId
  );

export const { updateSelecetedId } = passwordsSlice.actions;

export default passwordsSlice.reducer;
