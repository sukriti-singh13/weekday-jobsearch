import { Autocomplete, TextField } from '@mui/material';
import './AutoComplete.css';
import * as uiComponentTypes from '../../../types/uiComponents';

const DropDown = ({
  allowMultiple = false,
  options = [],
  defaultValue = undefined,
  id = 'dropdown',
  label = 'Select',
  onSelection,
}: uiComponentTypes.AutoCompleteProps) => {
  return (
    <Autocomplete
      id={id}
      multiple={allowMultiple}
      options={options}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => <TextField {...params} label={label} />}
      defaultValue={defaultValue}
      sx={{ minWidth: 248 }}
      onChange={(_, value) => onSelection(value)}
    />
  );
};

export default DropDown;
