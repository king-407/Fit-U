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
export const signinUser = createAsyncThunk('signinuser', async body => {
  const res = await fetch('http://10.0.2.2:3000/user/login', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return await res.json();
});
export const addToken = createAsyncThunk('addtoken', async () => {
  const result = await AsyncStorage.getItem('token');
  return result;
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
    [signinUser.pending]: (state, action) => {
      console.log(action);
      state.loading = true;
    },
    [signinUser.rejected]: (state, action) => {
      console.log(action);
      // state.loading = true;
    },
    [signinUser.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.loading = false;
      if (action.payload.error) {
        state.error = action.payload.error;
      } else {
        state.token = action.payload.token;

        AsyncStorage.setItem('token', state.token);
      }
    },
    [addToken.fulfilled]: (state, action) => {
      state.token = action.payload;
    },
  },
});
export default authReducer.reducer;
