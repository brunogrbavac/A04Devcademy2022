import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { accommodationSearchData } from '../types/data';

const initialState: accommodationSearchData = {
    type: "",
    personCount: 0,
    location: "",
    checkIn: new Date(),
    checkOut: new Date(),
};

export const accommodationSlice = createSlice({
  name: 'accommodation',
  initialState,
  reducers: {
    accommodationChange: (state, action: PayloadAction<any>) => {
      state.type = action.payload.accommodation.type;
      state.personCount = action.payload.accommodation.personCount;
      state.location = action.payload.accommodation.location;
      state.checkIn = action.payload.accommodation.checkIn;
      state.checkOut = action.payload.accommodation.checkOut;
    },
  },
});

// Action creators are generated for each case reducer function
export const { accommodationChange } = accommodationSlice.actions;
export default accommodationSlice.reducer;