import { Box } from '@mui/material';
import JobCard from '../ui/JobCard/JobCard';
import './JobPosts.css';
import { useGetJobsQuery } from '../../store/services/jobs';

const JobPosts = () => {
  const { status, currentData } = useGetJobsQuery({ limit: 10, offset: 0 });
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
