import Button from '@material-ui/core/Button/Button';
import TextField from '@material-ui/core/TextField/TextField';
import React from 'react'
import { FilterProductStyles } from './style';

const FilterProductList = () => {
    const classes= FilterProductStyles();
    return (
        <div className={classes.filterContainer}>
          <p>Expiration Date</p>
            <TextField
    id="date"
    label="From"
    type="date"
    defaultValue="2017-05-24"
    className={classes.dateField}
    InputLabelProps={{
      shrink: true,
    }}
  />
   <TextField
    id="date"
    label="To"
    type="date"
    defaultValue="2017-05-24"
    className={classes.dateField}
    InputLabelProps={{
      shrink: true,
    }}
  />
  <Button variant="outlined" className={classes.applyButton}>Apply Filter</Button>
        </div>
    )
}


export default FilterProductList;