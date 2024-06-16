import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: null,
  sendStatus: "idle",
};

export const fetchData = createAsyncThunk(
  "chat/fetchData",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    console.log("Hi");

    // const response = await axios.get("http://localhost:8080/api/data", {
    const response = await axios.get("http://localhost:8080/messages", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response.data, "from thunk response");
    return response.data;
  }
);
export const sendData = createAsyncThunk(
  "chat/sendData",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    const response = await axios.post("http://localhost:8080/messages", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }
);

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addData: (state, action) => {
      console.log(action.payload, "from addData ");
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(sendData.pending, (state) => {
        state.sendStatus = "loading";
      })
      .addCase(sendData.fulfilled, (state, action) => {
        state.sendStatus = "succeeded";
      })
      .addCase(sendData.rejected, (state, action) => {
        state.sendStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addData } = chatSlice.actions;
export default chatSlice.reducer;
