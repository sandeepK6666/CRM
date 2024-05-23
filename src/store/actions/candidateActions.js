import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosPrivateInstance from '../../api/axiosPrivateInstance';


export const getCandidates = createAsyncThunk(
  'candidates/getCandidates',
  async (thunkAPI) => {
    const id= 1
    try {
      const response = await axiosPrivateInstance.get(`https://dummyjson.com/users/${id}`);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  },
);

export const updateCandidate = createAsyncThunk(
  'candidates/updateCandidate',
  async (userData, thunkAPI) => {
    const id = 1;
    try {
      const response = await axiosPrivateInstance.put(`https://dummyjson.com/users/${id}`, userData);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  },
);