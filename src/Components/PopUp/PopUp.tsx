import { Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import Typography from '@material-ui/core/Typography/Typography';
import React, { Children } from 'react';
import { popupStyles } from './Style';
import ClearIcon from "@material-ui/icons/Clear";
import Controls from '../Controls';

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
          <DialogActions >
          <Controls.MyButton
                            text="Submit"
                            color="primary"
                            variant="contained"
                            size="medium"
                            type="submit"
                             />
                             <Controls.MyButton
                            text="Close"
                            color="default"
                            variant="contained"
                            size="medium"
                            type="button"
                            onClick={()=> {setOpenPopup(false)}}
                             />
          </DialogActions>
        </Dialog>
    )
}


export default PopUp;