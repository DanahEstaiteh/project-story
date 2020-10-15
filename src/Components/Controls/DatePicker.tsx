import React, { useState } from 'react'
import  {KeyboardDatePicker } from "@material-ui/pickers";
import {MuiPickersUtilsProvider}  from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

interface DatePickerProps {
  onChange: (date : Date) => void;
  name: string;
}

const DatePicker:React.FC<DatePickerProps> = (props) =>  {

  const [selectedDate, handleDateChange] = useState(new Date());
  const {onChange , name} = props;
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
        clearable
        name={name}
        value={selectedDate}
        placeholder={Date().toString()}
        onChange={date => onChange(date as Date)}
        minDate={new Date()}
        format="MM/dd/yyyy"
      />
         </MuiPickersUtilsProvider>
    )
}


export default DatePicker;