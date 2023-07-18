import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
export const signupUser = createAsyncThunk('signupuser', async body => {
  const res = await fetch('http://10.0.2.2:3000/user', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return await res.json();
});
const initialState = {
  token: '',
  loading: false,
  error: '',
};

const authReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [signupUser.fulfilled]: (state, action) => {
      state.error = action.payload.msg;
      console.log(state.error);
      //   state.error = action.payload.msg;
      // state.loading = false;
      // if (action.payload.error) {
      //   state.error = action.payload.error;
      // } else {
      //   state.error = action.payload.message;
      // }
    },
    [signupUser.pending]: (state, action) => {
      console.log(action);
    },
    [signupUser.rejected]: (state, action) => {
      console.log(action);
    },
  },
});
export default authReducer.reducer;
