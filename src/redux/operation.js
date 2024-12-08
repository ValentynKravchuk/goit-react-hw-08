import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://67505b8669dc1669ec1ac45a.mockapi.io/";
export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
  try {
    const response = await axios.get("/contacts");
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
});
