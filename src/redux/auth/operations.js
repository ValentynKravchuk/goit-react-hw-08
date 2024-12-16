import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const goitApi = axios.create({
  baseURL: "https://connections-api.goit.global/",
});
const setAuthHeder = (token) => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeder = () => {
  goitApi.defaults.headers.common.Authorization = ``;
};
export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const response = await goitApi.post("users/signup", credentials);
      setAuthHeder(response.data.token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const response = await goitApi.post("users/login", credentials);
      setAuthHeder(response.data.token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    await goitApi.post("users/logout");
    clearAuthHeder();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
    if (!savedToken) {
      return thunkApi.rejectWithValue("Token is not exist!");
    }
    try {
      setAuthHeder(savedToken);
      const { data } = await goitApi.get("users/current");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
