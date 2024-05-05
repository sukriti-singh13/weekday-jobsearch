const formatSalary = (amount: number, currency: string, scale: string) =>
  `${currency}${amount}${scale}`;
/**
 * Computes the estimated salary range formatted as a string based on provided minimum and maximum salary values,
 * adjusting for currency (USD or INR) and corresponding scales (K for thousands in USD, L for lakhs in INR).
 * If only one salary bound is provided, it returns a single value. Returns null if both bounds are missing.
 * @param minSalary - The minimum salary (optional).
 * @param maxSalary - The maximum salary (optional).
 * @param salaryCurrencyCode - The currency code (defaults to 'INR').
 * @returns Formatted salary string or null.
 */

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
