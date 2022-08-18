import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { accommodationData } from '../types/data';

const initialState: accommodationData = {
    id: null,
    title: null,
    subtitle: null,
    description: null,
    shortDescription: null,
    location: null,
    locationID: null,
    capacity: null,
    personCount: null,
    price: null,
    categorization: null,
    type: null,
    freeCancelation: null,
    imageUrl: null,
};

export const accommodationSlice = createSlice({
  name: 'accommodation',
  initialState,
  reducers: {
    accommodationChange: (state, action: PayloadAction<any>) => {
        state.id= action.payload.accommodation.id;
        state.title= action.payload.accommodation.title;
        state.subtitle= action.payload.accommodation.subtitle;
        state.description= action.payload.accommodation.description;
        state.shortDescription= action.payload.accommodation.shortDescription;
        state.location= action.payload.accommodation.location;
        state.locationID= action.payload.accommodation.locationID;
        state.capacity= action.payload.accommodation.capacity;
        state.personCount= action.payload.accommodation.personCount;
        state.price= action.payload.accommodation.price;
        state.categorization= action.payload.accommodation.categorization;
        state.type= action.payload.accommodation.type;
        state.freeCancelation= action.payload.accommodation.freeCancelation;
        state.imageUrl= action.payload.accommodation.imageUrl;
    },
  },
});

// Action creators are generated for each case reducer function
export const { accommodationChange } = accommodationSlice.actions;
export default accommodationSlice.reducer;