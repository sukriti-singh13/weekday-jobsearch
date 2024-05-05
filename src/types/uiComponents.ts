import * as filterTypes from './filters';

export type AutoCompleteProps = {
  allowMultiple: boolean;
  options: filterTypes.FilterOption[];
  defaultValue?: filterTypes.FilterOption;
  id: string;
  label: string;
  onSelection: (
    option: filterTypes.FilterOption | filterTypes.FilterOption[] | null
  ) => void;
};
