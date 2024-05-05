import { Box } from '@mui/material';
import JobCard from '../ui/JobCard/JobCard';
import './JobPosts.css';
import { useGetJobsQuery } from '../../store/services/jobs';
import { getFilteredJobs } from '../../utils/filters';
import { useSelector } from 'react-redux';

import * as filterTypes from '../../types/filters';

const JobPosts = () => {
  const filters = useSelector<{
    filters: filterTypes.FilterStore;
  }>((state) => state.filters.activeFilters) as filterTypes.Filters;

  const { status, currentData } = useGetJobsQuery({ limit: 10, offset: 0 });
  if (status === 'pending') {
    return <Box>Loading...</Box>;
  }

  const filteredJobs = getFilteredJobs(currentData.jdList, filters);
  if (!filteredJobs.length) {
    return <Box>No jobs found</Box>;
  }
  return (
    <Box className='job-posts-layout'>
      {filteredJobs.map((job) => (
        <JobCard
          logo={job.logoUrl}
          key={job.jdUid}
          companyName={job.companyName}
          title={job.jobRole}
          description={job.jobDetailsFromCompany}
          experience={job.minExp}
          location={job.location}
          minSalary={job.minJdSalary}
          maxSalary={job.maxJdSalary}
        />
      ))}
    </Box>
  );
};

export default JobPosts;
