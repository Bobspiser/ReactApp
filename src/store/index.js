import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { productsApi } from "./apis/apiSlice";
import collectSlice from './collectSlice';

export const store = configureStore({
  //Returnere en værdi med reducer
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer, //dette er en mere sikker måde, ungår "typo's"
    saved: collectSlice
  },
  middleware: (getDefaultMiddleware) => {  //Thunk middelware er default når der benyttes Redux Toolkit configureStore.
    return getDefaultMiddleware()
    .concat(productsApi.middleware);
  }
});

setupListeners(store.dispatch);

export { useGetAllProductsQuery } from './apis/apiSlice';