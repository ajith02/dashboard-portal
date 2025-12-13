import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginService } from "../../api/services/authService";

const sessionUser = JSON.parse(sessionStorage.getItem("user"));

const initialState = {
  isLoggedIn: !!sessionUser,
  user: sessionUser || null,
  token: sessionUser?.token || null,
  loading: false,
  error: null,
};

export const loginAsync = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const res = await loginService({ username, password });
      return res; 
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Invalid credentials"
      );
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.token = null;
      state.error = null;
      sessionStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
        state.token = action.payload.token;
        sessionStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
