import { useDispatch } from 'react-redux';
import DropDown from '../ui/AutoComplete/AutoComplete';
import './JobFilters.css';
import { Box, TextField } from '@mui/material';
import { updateFilter } from '../../store/reducers/filters';

import * as FILTER_CONSTANTS from '../../constants/filters';
import * as filterTypes from '../../types/filters';

const JobFilters = () => {
  const dispatch = useDispatch();
/**
 * Updates filter state for a given key with various value types (string, array, object, or null).
 * @param key - Filter key to update.
 * @param value - New value for the filter.
 */
  const handleFilterChange = (
    key: string,
    value: filterTypes.FilterOption | filterTypes.FilterOption[] | null | string
  ) => {
    if (typeof value === 'string') {
      dispatch(updateFilter({ key, value: value }));
      return;
    }
    if (value === null) {
      dispatch(updateFilter({ key, value: null }));
      return;
    }
    if (Array.isArray(value)) {
      dispatch(updateFilter({ key, value: value.map((v) => v.value) }));
      return;
    }
    dispatch(updateFilter({ key, value: value.value }));
  };
  return (
    <Box className='job-filters'>
      <DropDown
        allowMultiple
        label='Roles'
        id='role-filter'
        options={FILTER_CONSTANTS.FILTERS_OPTION.ROLES}
        onSelection={(option) => handleFilterChange('roles', option)}
      />
      <DropDown
        allowMultiple
        label='No of Employees'
        id='company-size-filter'
        options={FILTER_CONSTANTS.FILTERS_OPTION.EMPLOYEE_COUNT}
        onSelection={(option) => handleFilterChange('employeeCount', option)}
      />
      <DropDown
        allowMultiple={false}
        label='Experience'
        id='experience-filter'
        options={FILTER_CONSTANTS.FILTERS_OPTION.EXPERIENCE}
        onSelection={(option) => handleFilterChange('experience', option)}
      />

      <DropDown
        allowMultiple
        label='Remote'
        id='remote-filter'
        options={FILTER_CONSTANTS.FILTERS_OPTION.REMOTE}
        onSelection={(option) => handleFilterChange('remote', option)}
      />
      <DropDown
        allowMultiple
        label='Minimum Base Pay Salary'
        id='min-base-pay-filter'
        options={FILTER_CONSTANTS.FILTERS_OPTION.MIN_BASE_PAY}
        onSelection={(option) => handleFilterChange('minBasePay', option)}
      />
      <TextField
        id='company-name'
        label='Company Name'
        variant='outlined'
        onChange={(e) => handleFilterChange('companyName', e.target.value)}
      />
    </Box>
  );
};

export default JobFilters;
