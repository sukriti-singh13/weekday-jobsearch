import { createSlice } from '@reduxjs/toolkit';

import * as filterTypes from '../../types/filters';
/**
 * Updates the value of a specific filter in the filter store.
 * Directly modifies the state's filter properties using the provided key and new value.
 * Suitable for string, array, or null values, depending on the filter type.
 *
 * @param state - Current filter store state.
 * @param payload - Object containing the filter key and the new value to update.
 */

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
