import { configureStore  } from '@reduxjs/toolkit';
import { themeReducer } from './Reducers/themeReducer';
import { rowReducer } from './Reducers/rowReducer';
import { toastReducer } from './Reducers/toastReducer';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    rows: rowReducer,
    toast: toastReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
 export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
 export type AppDispatch = typeof store.dispatch
