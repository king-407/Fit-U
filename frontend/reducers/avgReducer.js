import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
export const details = createAsyncThunk('walkinuser', async body => {
  const res = await fetch('http://10.0.2.2:3000/details/avg', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: await AsyncStorage.getItem('token'),
    },
  });

  return await res.json();
});
export const postDetails = createAsyncThunk('postDetail', async body => {
  const res = await fetch('http://10.0.2.2:3000/details', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: await AsyncStorage.getItem('token'),
    },
    body: JSON.stringify(body),
  });
  return await res.json();
});

const initialState = {
  loading: false,
  msgError: null,
  info: {},
};
const avgReducer = createSlice({
  name: 'avg',
  initialState,
  reducers: {},
  extraReducers: {
    [details.fulfilled]: (state, action) => {
      if (action.payload.message) {
        state.msgError = action.payload.message;
      } else {
        state.info = action.payload;
        state.msgError = null;
      }
    },
    [postDetails.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [postDetails.rejected]: (state, action) => {
      console.log(action);
    },
  },
});
export default avgReducer.reducer;
