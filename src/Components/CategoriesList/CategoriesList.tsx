import React, { useEffect, useState } from "react";
import List from "@material-ui/core/List";
import { ListItem, ListItemText, makeStyles } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import EditIcon from "@material-ui/icons/Edit";
import SwapVertIcon from "@material-ui/icons/SwapVert";

import AlertDialog from "../AlertDialog/AlertDialog";

import DataList from "./DataList";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: "30px",
  },
  List: {
    border: "2px solid #DDDDDD",
    width: "300px",
    paddingBottom: "0px",
  },
  ListItem: {
    border: "1px solid #DDDDDD",
    width: "300px",
    height: "70px",
    "&:nth-of-type(odd)": {
      backgroundColor: "#F9F9F9",
    },

    textAlign: "center",
  },
});

export interface Categorie {
  id: string;
  [CategorieName: string]: string;
  CreatedAt: string;
}

interface ActionListProps {
  deletitem: (arr: Categorie[]) => void;
  Categories: Categorie[];
}
interface DataListProps<T> {
  Categories: T[];
}

const CategoriesActionList: React.FC<ActionListProps> = (props) => {
  const classes = useStyles();
  const { Categories, deletitem } = props;
  const [data, setData] = React.useState<Categorie[]>(Categories);
  const [open, setOpen] = useState<boolean>(false);
  const [itemId, setItemId] = useState<string>("");

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleDelete = (id: string) => {
    setItemId(id);
    handleOpen();
  };
  useEffect(() => {
    deletitem(data);
  }, [data]);
  return (
    <div>
      <List className={classes.List}>
        <ListItem>
          <ListItemText>{props.children}</ListItemText>
          <ListItemIcon>
            <SwapVertIcon />
          </ListItemIcon>
        </ListItem>

        {data.map((CategoryAction) => (
          <ListItem className={classes.ListItem} key={CategoryAction.id}>
            <ListItemIcon>
              <ClearIcon onClick={() => handleDelete(CategoryAction.id)} />
              <EditIcon />
            </ListItemIcon>
          </ListItem>
        ))}
        <AlertDialog
          Data={data}
          id={itemId}
          isOpen={open}
          onDelete={(data) => setData(data)}
          onClose={handleClose}
        />
      </List>
    </div>
  );
};

const CategoriesList: React.FC<DataListProps<Categorie>> = (props) => {
  const { Categories } = props;
  const classes = useStyles();
  const [data, setData] = React.useState<Categorie[]>(Categories);

  useEffect(() => {
    setData(data);
  }, [data]);

  return (
    <div className={classes.root}>
      <DataList type="CategorieName" Categories={data}>
        Categorie Name
      </DataList>
      <DataList type="CreatedAt" Categories={data}>
        Created At
      </DataList>
      <CategoriesActionList
        Categories={data}
        deletitem={(data) => setData(data)}
      >
        Actions
      </CategoriesActionList>
    </div>
  );
};

export default CategoriesList;
