import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userData } from '../types/data';

const initialState: userData = {
    email:'',
    password:'',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userChange: (state, action: PayloadAction<any>) => {
        state.email = action.payload.user.email;
        state.password = action.payload.user.password;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userChange } = userSlice.actions;
export default userSlice.reducer;