import React from 'react';
import DropDown from '../ui/AutoComplete/AutoComplete';
import './JobFilters.css';
import { Box } from '@mui/material';

const JobFilters = () => {
  return (
    <Box className='job-filters'>
      <DropDown
        allowMultiple
        label='Roles'
        id='hs'
        options={[
          { value: 'Full Time', label: 'Full Time' },
          { value: 'Part Time', label: 'Part Time' },
          { value: 'Contract', label: 'Contract' },
          { value: 'Internship', label: 'Internship' },
          { value: 'Temporary', label: 'Temporary' },
        ]}
      />
      <DropDown
        allowMultiple
        label='No of Employees'
        id='hs'
        options={[
          { value: 'Full Time', label: 'Full Time' },
          { value: 'Part Time', label: 'Part Time' },
          { value: 'Contract', label: 'Contract' },
          { value: 'Internship', label: 'Internship' },
          { value: 'Temporary', label: 'Temporary' },
        ]}
      />
      <DropDown
        allowMultiple
        label='Experience'
        id='hs'
        options={[
          { value: 'Full Time', label: 'Full Time' },
          { value: 'Part Time', label: 'Part Time' },
          { value: 'Contract', label: 'Contract' },
          { value: 'Internship', label: 'Internship' },
          { value: 'Temporary', label: 'Temporary' },
        ]}
      />
      <DropDown
        allowMultiple
        label='Location'
        id='hs'
        options={[
          { value: 'Full Time', label: 'Full Time' },
          { value: 'Part Time', label: 'Part Time' },
          { value: 'Contract', label: 'Contract' },
          { value: 'Internship', label: 'Internship' },
          { value: 'Temporary', label: 'Temporary' },
        ]}
      />
      <DropDown
        allowMultiple
        label='Remote'
        id='hs'
        options={[
          { value: 'Full Time', label: 'Full Time' },
          { value: 'Part Time', label: 'Part Time' },
          { value: 'Contract', label: 'Contract' },
          { value: 'Internship', label: 'Internship' },
          { value: 'Temporary', label: 'Temporary' },
        ]}
      />
      <DropDown
        allowMultiple
        label='Minimum Base Pay Salary'
        id='hs'
        options={[
          { value: 'Full Time', label: 'Full Time' },
          { value: 'Part Time', label: 'Part Time' },
          { value: 'Contract', label: 'Contract' },
          { value: 'Internship', label: 'Internship' },
          { value: 'Temporary', label: 'Temporary' },
        ]}
      />
      <DropDown
        allowMultiple
        label='Company Name'
        id='hs'
        options={[
          { value: 'Full Time', label: 'Full Time' },
          { value: 'Part Time', label: 'Part Time' },
          { value: 'Contract', label: 'Contract' },
          { value: 'Internship', label: 'Internship' },
          { value: 'Temporary', label: 'Temporary' },
        ]}
      />
    </Box>
  );
};

export default JobFilters;
