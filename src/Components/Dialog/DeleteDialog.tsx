import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { Category } from "../../Types/index";

interface AlertDialogProps {
  id: string;
  onDelete: (newCat: Category[]) => void;
  isOpen: boolean;
  onClose: () => void;
  Data: Category[];
}
const DeleteDialog: React.FC<AlertDialogProps> = (props) => {
  const { id, onDelete, isOpen, onClose, Data } = props;

  const handleDelete = () => {
    const newCategories = Data.filter((cat) => cat.id !== id);
    onDelete(newCategories);
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
          Are you sure you want to delete this record?
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
