import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import * as CONSTANTS from '../../constants/app';
export const jobsApi = createApi({
  reducerPath: 'jobsApi',
  baseQuery: fetchBaseQuery({ baseUrl: CONSTANTS.BASE_URL }),
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: ({ limit = 10, offset = 0 }) => ({
        url: CONSTANTS.ENDPOINTS.JOBS,
        method: 'POST',
        body: {
          limit,
          offset,
        },
        merge: (currentData, newData) => {
          currentData.results.push(...newData.results);
        },
      }),
    }),
  }),
});

export const { useGetJobsQuery } = jobsApi;
