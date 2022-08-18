import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { locationData } from '../types/data';

const initialState: locationData[] = [];

export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    locationsChange: (state, action: PayloadAction<any>) => {
        state = [...action.payload.locations]
    },
  },
});

// Action creators are generated for each case reducer function
export const { locationsChange } = locationsSlice.actions;
export default locationsSlice.reducer;