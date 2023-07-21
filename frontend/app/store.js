import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../reducers/authReducer';
import avgReducer from '../reducers/avgReducer';
export const store = configureStore({
  reducer: {
    user: authReducer,
    avg: avgReducer,
  },
});
export default store;
