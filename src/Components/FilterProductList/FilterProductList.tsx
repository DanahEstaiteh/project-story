import Button from "@material-ui/core/Button/Button";
import TextField from "@material-ui/core/TextField/TextField";
import React, { useState } from "react";
import { FilterProductStyles } from "./style";
import Controls from "../Controls";
import { productData } from "../../Data/Data";
import { product } from "../../Types";

interface filterPropsType {
  onFilter: (newData: product[]) => void;
}

const FilterProductList: React.FC<filterPropsType> = (props) => {
  const classes = FilterProductStyles();
  const [fromDate, setFromDate] = useState<Date>(new Date());
  const [toDate, setToDate] = useState<Date>(new Date());
  const { onFilter } = props;
  const handleFilter = () => {
    console.log({ fromDate, toDate });
    let newData = productData.filter(
      (x) => x.expirationDate >= fromDate && x.expirationDate <= toDate
    );
    onFilter(newData);
    console.log(newData);
  };
  return (
    <div className={classes.filterContainer}>
      <p>Expiration Date</p>
      
      <p>From</p>
      <Controls.DatePicker name="from" onChange={(date) => setFromDate(date)} minDate={new Date("1/1/1900")}/>
      <p>To</p>
      <Controls.DatePicker name="to" onChange={(date) => setToDate(date)} minDate={new Date("1/1/1900")}/>

      <Controls.MyButton 
        text="Apply Filter"
        variant="outlined"
        onClick={() => handleFilter()}
        size="medium"
        color="default"
        type="button"
      />
      
    </div>
  );
};

export default FilterProductList;
