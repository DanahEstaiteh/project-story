import { InputLabel, Select as MuiSelect } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import React from 'react';
import { Category, CategoryTitle } from '../../Types';

interface SelectPropsType {
  name: string;
  label: string;
  value: string;
  error: string;
  onChange: (e: any) => void;
  options: CategoryTitle[];
}

const Select: React.FC<SelectPropsType> = (props) => {
  const { name, label, value, error = '', onChange, options } = props;

  return (
    <FormControl variant="outlined" {...(error && { error: true })}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect label={label} name={name} value={value} onChange={onChange}>
        <MenuItem value=""> None</MenuItem>
        {options.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.title}
          </MenuItem>
        ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};

export default Select;
