import { configureStore } from '@reduxjs/toolkit';
import { jobsApi } from './services/jobs';
import { filterSlice } from './reducers/filters';

export const store = configureStore({
  reducer: {
    [jobsApi.reducerPath]: jobsApi.reducer,
    filters: filterSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jobsApi.middleware),
});
