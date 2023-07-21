import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
export const walkUser = createAsyncThunk('walkinuser', async body => {
  const res = await fetch('http://10.0.2.2:3000/walk/get/walk', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: await AsyncStorage.getItem('token'),
    },
  });

  return await res.json();
});
export const waterUser = createAsyncThunk('waterinuser', async body => {
  const res = await fetch('http://10.0.2.2:3000/water/get/water', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: await AsyncStorage.getItem('token'),
    },
  });

  return await res.json();
});
export const sleepUser = createAsyncThunk('sleepinuser', async body => {
  const res = await fetch('http://10.0.2.2:3000/sleep/get/sleep', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: await AsyncStorage.getItem('token'),
    },
  });

  return await res.json();
});
export const cycleUser = createAsyncThunk('cycleinuser', async body => {
  const res = await fetch('http://10.0.2.2:3000/cycle/get/cycle', {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      Authorization: await AsyncStorage.getItem('token'),
    },
  });

  return await res.json();
});
const initialState = {
  loading: false,
  msgCycle: {},
  msgWater: {},
  msgSleep: {},
  msgWalk: {},
  walk: {},
  sleep: {},
  water: {},
  cycle: {},
};
const avgReducer = createSlice({
  name: 'avg',
  initialState,
  reducers: {},
  extraReducers: {
    [walkUser.fulfilled]: (state, action) => {
      if (action.payload.msg) {
        state.msgWalk = action.payload.msg;
      } else {
        state.walk = action.payload.message;
      }
      //   state.error = action.payload.msg;
      // state.loading = false;
      // if (action.payload.error) {
      //   state.error = action.payload.error;
      // } else {
      //   state.error = action.payload.message;
      // }
    },
    [walkUser.pending]: (state, action) => {
      console.log(action);
    },
    [walkUser.rejected]: (state, action) => {
      console.log(action);
    },

    [sleepUser.pending]: (state, action) => {
      console.log(action);
      state.loading = true;
    },
    [sleepUser.rejected]: (state, action) => {
      console.log(action);
      // state.loading = true;
    },
    [sleepUser.fulfilled]: (state, action) => {
      if (action.payload.msg) {
        state.msgSleep = action.payload.msg;
      } else {
        state.sleep = action.payload.message;
      }
    },

    [cycleUser.pending]: (state, action) => {
      console.log(action);
    },
    [cycleUser.rejected]: (state, action) => {
      console.log(action);
      // state.loading = true;
    },
    [cycleUser.fulfilled]: (state, action) => {
      if (action.payload.msg) {
        state.msgCycle = action.payload.msg;
      } else {
        state.cycle = action.payload.message;
      }
    },

    [waterUser.pending]: (state, action) => {
      console.log(action);
    },
    [waterUser.rejected]: (state, action) => {
      console.log(action);
      // state.loading = true;
    },
    [waterUser.fulfilled]: (state, action) => {
      if (action.payload.msg) {
        state.msgWater = action.payload.msg;
      } else {
        state.water = action.payload.message;
      }
    },
  },
});
export default avgReducer.reducer;
