import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: localStorage.getItem("mlab") || null,
  loading: false,
  error: null,
  mesg: null,
};

export const signup = createAsyncThunk(
  "auth/signup",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/signup",
        credentials
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const signin = createAsyncThunk(
  "auth/signin",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/signin",
        credentials
      );
      console.log(response)
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return thunkAPI.rejectWithValue(error.response.data);
      } else {
        return thunkAPI.rejectWithValue({ message: "Network error" });
      }
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signout: (state) => {
      state.token = null;
      localStorage.removeItem("mlab");
      window.location.reload();  
    
      
    },
    settoken: (state) => {
      state.token = localStorage.getItem("mlab");
      window.location.reload();  
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.token = action //>>>> need to check thsi line
        localStorage.setItem("mlab", action.payload.token);
      })
      .addCase(signin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        localStorage.setItem("mlab", action.payload.token);
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { signout, settoken } = authSlice.actions;
export default authSlice.reducer;



// BEFORE UPDATE TOKEN STATE
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   token: null,
//   loading: false,
//   error: null,
//   // status: {
//   //   username: false,
//   //   email: true,
//   //   phone: false,
//   // },
// };

// export const signup = createAsyncThunk(
//   "auth/signup",
//   async (credentials, thunkAPI) => {
//     console.log(credentials, "from slice");
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/signup",
//         credentials
//       );
//       console.log(response.data, 'from slice Thunk SignUp')
//       return response.data;

//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.response.data);
//     }
//   }
// );

// export const signin = createAsyncThunk(
//   "auth/signin",
//   async (credentials, thunkAPI) => {
//     try {
//       const response = await axios.post(
//         "http://localhost:8080/signin",
//         credentials
//       );
//       console.log(response.data, 'from slice thunk')
//       return response.data;
//     } catch (error) {
//       if (error.response && error.response.data) {
//         return thunkAPI.rejectWithValue(error.response.data);
//       } else {
//         return thunkAPI.rejectWithValue({ message: "Network error" });
//       }
//     }
//   }
// );

// // export const signin = createAsyncThunk(
// //   "auth/signin",
// //   async (credentials, thunkAPI) => {
// //     console.log(credentials, "in slice");
// //     try {
// //       const response = await axios.post(
// //         "http://localhost:8080/signin",
// //         credentials
// //       );
// //       console.log(response.data);
// //       return response.data;
// //     } catch (error) {
// //       return thunkAPI.rejectWithValue(error.response.data);
// //     }
// //   }
// // );

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     // setusername: (state) => {
//     //   state.status.username = true;
//     //   state.status.email = false;
//     //   state.status.phone = false;
//     // },
//     // setemail: (state) => {
//     //   state.status.username = false;
//     //   state.status.email = true;
//     //   state.status.phone = false;
//     // },
//     // setphone: (state) => {
//     //   state.status.username = false;
//     //   state.status.email = false;
//     //   state.status.phone = true;
//     // },
//     signout: (state) => {
//       state.token = null;
//       localStorage.removeItem("mlab");
//       // Optionally, reload the page
//       // window.location.reload();
//     },
//     settoken: () => {
//       localStorage.getItem("mlab");
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(signin.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(signin.fulfilled, (state, action) => {
//         state.loading = false;
//         state.token = action.payload.token;
//         localStorage.setItem("mlab", action.payload.token);
//       })
//       .addCase(signin.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(signup.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(signup.fulfilled, (state, action) => {
//         state.loading = false;
//         state.token = action.payload.token;
//         localStorage.setItem("mlab", action.payload.token);
//       })
//       .addCase(signup.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { signout, settoken, setemail, setphone, setusername } =
//   authSlice.actions;
// export default authSlice.reducer;
