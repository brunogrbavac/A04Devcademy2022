import { configureStore } from '@reduxjs/toolkit';
import accommodationSlice from './accommodation';

export const store = configureStore({
  reducer: {
    accommodation: accommodationSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch