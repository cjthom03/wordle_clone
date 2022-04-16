import { configureStore  } from '@reduxjs/toolkit';
import { themeReducer } from './Reducers/themeReducer';
import { rowReducer } from './Reducers/rowReducer';
import { toastReducer } from './Reducers/toastReducer';
import { wordsReducer } from './Reducers/wordsReducer';
import { wordApi } from './Services/words';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    rows: rowReducer,
    toast: toastReducer,
    words: wordsReducer,
    [wordApi.reducerPath]: wordApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(wordApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
 export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
 export type AppDispatch = typeof store.dispatch
