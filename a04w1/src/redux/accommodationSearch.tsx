import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { accommodationSearchData } from '../types/data';

const initialState: accommodationSearchData = {
    type: null,
    personCount: null,
    location: null,
    checkIn: null,
    checkOut: null,
};

export const accommodationSearchSlice = createSlice({
  name: 'accommodationSearch',
  initialState,
  reducers: {
    accommodationSearchChange: (state, action: PayloadAction<any>) => {
      state.type = action.payload.accommodation.type;
      state.personCount = action.payload.accommodation.personCount;
      state.location = action.payload.accommodation.location;
      state.checkIn = action.payload.accommodation.checkIn;
      state.checkOut = action.payload.accommodation.checkOut;
    },
  },
});

// Action creators are generated for each case reducer function
export const { accommodationSearchChange } = accommodationSearchSlice.actions;
export default accommodationSearchSlice.reducer;