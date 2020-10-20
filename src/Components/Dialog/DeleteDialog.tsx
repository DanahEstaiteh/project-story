import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Cart, Category, Item, product } from '../../Types/index';

type DataType = Category | product | Cart | Item;

interface AlertDialogProps {
  id: string | number;
  onDelete: (newData: DataType[]) => void;
  isOpen: boolean;
  onClose: () => void;
  Data: DataType[];
  dataType: string;
}
const DeleteDialog: React.FC<AlertDialogProps> = (props) => {
  const { id, onDelete, isOpen, onClose, Data, dataType } = props;

  const handleDelete = () => {
    const newData = Data.filter((record) => record.id !== id);
    onDelete(newData);
    console.log({ id });
    onClose();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete this {dataType}?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          No
        </Button>
        <Button onClick={handleDelete} color="primary" autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
