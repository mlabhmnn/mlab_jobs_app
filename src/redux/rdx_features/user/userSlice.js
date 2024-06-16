import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userType: null, // jobSeeker or employer
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.userType = null;
    },
  },
});

export const { setUser, setUserType, logout } = userSlice.actions;

export default userSlice.reducer;

// // src/features/user/userSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8080";

// export const updateUser = createAsyncThunk(
//   "user/updateUser",
//   async ({ endpoint, data }, { rejectWithValue }) => {
//     try {
//       const response = await axios.put(`${apiUrl}/${endpoint}`, data);
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// const initialState = {
//   message: "",
//   status: "idle",
//   error: null,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(updateUser.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(updateUser.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.message = action.payload.message;
//       })
//       .addCase(updateUser.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload.error;
//       });
//   },
// });

// export default userSlice.reducer;
