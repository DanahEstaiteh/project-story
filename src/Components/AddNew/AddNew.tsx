import React, { useEffect, useState } from "react";
import { categoryStyles } from "../CategoriesList/Styles";
import { Category } from "../../Types";

import NewDialog from "../Dialog/NewDialog";

interface AddNewProps {
  onSubmit: (newCat: Category[]) => void;
  Data: Category[];
}

const AddNew: React.FC<AddNewProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<Category[]>([]);
  const { onSubmit, Data } = props;
  const handleCloseDialog = () => {
    setOpen(false);
  };
  const handleOpenDialog = () => {
    setOpen(true);
  };
  useEffect(() => {
    onSubmit(data);
  }, [data]);

  const classes = categoryStyles();
  return (
    <>
      <button className={classes.headerButton} onClick={handleOpenDialog}>
        Add Category
      </button>
      <NewDialog
        Data={Data}
        isOpen={open}
        onSubmit={(data) => setData(data)}
        onClose={handleCloseDialog}
      />
    </>
  );
};

export default AddNew;
