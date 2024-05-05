const formatSalary = (amount: number, currency: string, scale: string) =>
  `${currency}${amount}${scale}`;

export const getEstimatedSalary = ({
  minSalary = null,
  maxSalary = null,
  salaryCurrencyCode = 'INR',
}: {
  minSalary: number | null;
  maxSalary: number | null;
  salaryCurrencyCode: string | null;
}) => {
  const isUSD = salaryCurrencyCode === 'USD';
  const currency = isUSD ? '$' : '₹';
  const scale = isUSD ? 'K' : ' L';
  if (minSalary && maxSalary) {
    return `${formatSalary(minSalary, currency, scale)} - ${formatSalary(
      maxSalary,
      currency,
      scale
    )} PA`;
  }
  if (minSalary) {
    return `${formatSalary(minSalary, currency, scale)} PA`;
  }
  if (maxSalary) {
    return `Upto ${formatSalary(maxSalary, currency, scale)} PA`;
  }

  return null;
};
