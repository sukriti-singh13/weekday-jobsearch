import { Box, Paper } from '@mui/material';
import JobCard from '../ui/JobCard/JobCard';
import './JobPosts.css';
import { useGetJobsQuery } from '../../store/services/jobs';
import { getFilteredJobs } from '../../utils/filters';
import { useSelector } from 'react-redux';

import * as filterTypes from '../../types/filters';
import { useEffect, useState } from 'react';
import Loader from '../ui/Loader/Loader';

const JobPosts = () => {
  const [page, setPage] = useState(0);
  const filters = useSelector<{
    filters: filterTypes.FilterStore;
  }>((state) => state.filters.activeFilters) as filterTypes.Filters;

  const { currentData, isFetching } = useGetJobsQuery(page);

  const handleScroll = () => {
    console.log(
      document.documentElement.offsetHeight -
        (window.innerHeight + document.documentElement.scrollTop)
    );
    if (
      document.documentElement.offsetHeight -
        (window.innerHeight + document.documentElement.scrollTop) >
        30 ||
      isFetching
    )
      return;
    if (currentData?.jdList.length < currentData?.totalCount) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFetching]);

  const filteredJobs = getFilteredJobs(currentData?.jdList, filters);
  if (!filteredJobs.length && !isFetching) {
    return (
      <Paper
        elevation={3}
        sx={{
          paddingX: '2rem',
          paddingY: '1rem',
          textAlign: 'center',
          width: 'fit-content',
          margin: 'auto',
        }}
      >
        <h4>No Jobs Found</h4>
      </Paper>
    );
  }
  return (
    <>
      <Box className='job-posts-layout'>
        {filteredJobs?.map((job) => (
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
            salaryCurrencyCode={job.salaryCurrencyCode}
          />
        ))}
      </Box>
      <Box className='loader-main'>{isFetching && <Loader />}</Box>
    </>
  );
};

export default JobPosts;
