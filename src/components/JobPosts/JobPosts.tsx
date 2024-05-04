import { Box } from '@mui/material';
import JobCard from '../ui/JobCard/JobCard';
import './JobPosts.css';
import { useGetJobsQuery } from '../../store/services/jobs';
import { useState } from 'react';

const JobPosts = () => {
  const [page, setPage] = useState(1);
  const { status, currentData } = useGetJobsQuery({ limit: 10, offset: 0 });

  console.log({ status, currentData });

  if (status === 'pending') {
    return <Box>Loading...</Box>;
  }

  return (
    <Box className='job-posts-layout'>
      {currentData.jdList.map((job) => (
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
