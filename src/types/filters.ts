export type FilterOption = {
  label: string;
  value: string;
};

export type Filters = {
  roles: string[] | null;
  employeeCount: string[] | null;
  experience: string | null;
  remote: string[] | null;
  minBasePay: string[] | null;
  companyName: string | null;
};
export type FilterStore = {
  activeFilters: Filters;
};
export type FilterKeys = keyof Filters;
