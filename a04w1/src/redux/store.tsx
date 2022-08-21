import { configureStore } from '@reduxjs/toolkit';
import accommodationSlice from './accommodation';
import accommodationSearchSlice from './accommodationSearch';
import locationsSlice from './locations';
import userSlice from './user';

export const store = configureStore({
  reducer: {
    accommodationSearch: accommodationSearchSlice,
    accommodation: accommodationSlice,
    locations: locationsSlice,
    user: userSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch