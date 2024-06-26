import * as filterTypes from '../types/filters';
import * as jobTypes from '../types/jobs';
/**
 * Filters a list of jobs based on specified criteria in filters.
 * Considers role, experience, base pay, and company name.
 * @param jobs - Array of jobs to filter.
 * @param filters - Criteria to use for filtering.
 * @returns Filtered array of jobs.
 */
export const getFilteredJobs = (
  jobs: jobTypes.Job[],
  filters: filterTypes.Filters
) => {
  if (!jobs) return [];
  return jobs.filter((job) => {
    const rolesMatcher = filters.roles?.length
      ? filters.roles.includes(job.jobRole)
      : true;

    const experienceMatcher = filters.experience
      ? job.minExp
        ? Number(filters.experience) >= job.minExp
        : false
      : true;

    const basePayMatcher = filters.minBasePay?.length
      ? filters.minBasePay.filter((minBasePay) => {
          return job.minJdSalary
            ? Number(minBasePay) <= job.minJdSalary
            : false || job.maxJdSalary
            ? Number(minBasePay) <= job.maxJdSalary
            : false;
        }).length
      : true;

    const companyMatcher = filters.companyName
      ? job.companyName
          .toLowerCase()
          .includes(filters.companyName.toLowerCase())
      : true;

    return (
      rolesMatcher && experienceMatcher && basePayMatcher && companyMatcher
    );
  });
};
