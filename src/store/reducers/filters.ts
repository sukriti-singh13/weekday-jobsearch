import { createSlice } from '@reduxjs/toolkit';

import * as filterTypes from '../../types/filters';

const initialState: filterTypes.FilterStore = {
  activeFilters: {
    roles: [],
    employeeCount: [],
    experience: null,
    remote: [],
    minBasePay: [],
    companyName: null,
  },
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    updateFilter: (
      state: filterTypes.FilterStore,
      {
        payload,
      }: {
        payload: {
          key: string;
          value: string | string[] | null;
        };
      }
    ) => {
      const { key, value } = payload;
      state.activeFilters[key] = value;
    },
  },
});

export const { updateFilter } = filterSlice.actions;
