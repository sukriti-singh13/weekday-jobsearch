import { Autocomplete, TextField } from '@mui/material';
import './AutoComplete.css';
type Option = {
  value: string;
  label: string;
};

const DropDown = ({
  allowMultiple = false,
  options = [],
  defaultValue = undefined,
  id = 'dropdown',
  label = 'Select',
}: {
  allowMultiple: boolean;
  options: Option[];
  defaultValue?: Option;
  id: string;
  label: string;
}) => {
  return (
    <Autocomplete
      className='autoComplete'
      id={id}
      multiple={allowMultiple}
      options={options}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => <TextField {...params} label={label} />}
      defaultValue={defaultValue}
    />
  );
};

export default DropDown;
