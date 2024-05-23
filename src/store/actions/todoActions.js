import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosPrivateInstance from "../../api/axiosPrivateInstance";

export const getTodo = createAsyncThunk(
  "todo/getTodo",
  async (thunkAPI) => {
    try {
      const limit = 3;
      const skip = 10;
      const response = await axiosPrivateInstance.get(
        `https://dummyjson.com/todos?limit=${limit}&skip=${skip}`
      );
      return response?.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }
);
