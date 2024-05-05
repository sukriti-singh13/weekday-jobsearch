import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import * as CONSTANTS from '../../constants/app';

export const jobsApi = createApi({
  reducerPath: 'jobsApi',
  baseQuery: fetchBaseQuery({ baseUrl: CONSTANTS.BASE_URL }),
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: (page) => ({
        url: CONSTANTS.ENDPOINTS.JOBS,
        method: 'POST',
        body: {
          limit: 10,
          offset: 10 * page,
        },
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (jobs, newJobs) => {
        jobs.jdList.push(...newJobs.jdList);
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetJobsQuery } = jobsApi;
