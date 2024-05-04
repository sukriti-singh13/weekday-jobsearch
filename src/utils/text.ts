export const getEstimatedSalary = ({
  minSalary = null,
  maxSalary = null,
}: {
  minSalary: number | null;
  maxSalary: number | null;
}) => {
  if (minSalary && maxSalary) {
    return `₹${minSalary} - ₹${maxSalary} LPA`;
  }
  if (minSalary && !maxSalary) {
    return `₹${minSalary} LPA`;
  }
  if (!minSalary && maxSalary) {
    return `Upto ₹${maxSalary} LPA`;
  }
  return null;
};
