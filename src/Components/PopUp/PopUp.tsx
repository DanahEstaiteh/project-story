import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import Typography from '@material-ui/core/Typography/Typography';
import React, { Children } from 'react';
import { popupStyles } from './Style';
import ClearIcon from "@material-ui/icons/Clear";

interface PopupPropsType {
  title: string;
  openPopup: boolean;
  setOpenPopup: (isOpen:boolean) => void;

}

const PopUp:React.FC<PopupPropsType> = (props) => {

    const { title,  openPopup, setOpenPopup,children } = props;
    const classes = popupStyles();
    return (
        <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
          <DialogTitle className={classes.dialogTitle}>
          <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                   
                        <ClearIcon onClick={()=>{setOpenPopup(false)}} />
                    </div>
          </DialogTitle>
          <DialogContent dividers>
           {children}
          </DialogContent>
        </Dialog>
    )
}


export default PopUp;