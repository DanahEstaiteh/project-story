import React, { useEffect, useState } from "react";
import List from "@material-ui/core/List";
import { ListItem, ListItemText } from "@material-ui/core";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import SwapVertIcon from "@material-ui/icons/SwapVert";
import SortIcon from "@material-ui/icons/Sort";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { types } from "@babel/core";

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

interface Categorie {
  id: string;
  [CategorieName: string]: string;
  CreatedAt: string;
}

interface DataListProps {
  Categories: Categorie[];
  type: string;
}

const DataList: React.FC<DataListProps> = (props) => {
  const { Categories, type } = props;
  const [data, setData] = useState<Array<Categorie>>(Categories);
  const [sortName, setSortName] = useState<boolean>(false);
  const classes = useStyles();

  const CategoriesNameSort = () => {
    Categories.sort((a, b) => (a[type] > b[type] ? 1 : -1));
    setData(Categories);
  };

  useEffect(() => {
    if (sortName) {
      CategoriesNameSort();
    }
  }, [sortName, data]);

  return (
    <div>
      <List className={classes.List}>
        <ListItem>
          <ListItemText>{props.children}</ListItemText>
          <ListItemIcon>
            <SwapVertIcon onClick={() => setSortName(!sortName)} />
          </ListItemIcon>
          <ListItemIcon>
            <SortIcon />
          </ListItemIcon>
        </ListItem>
        {Categories.map((item) => (
          <ListItem className={classes.ListItem} key={item.id}>
            <ListItemText>{item[type]}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DataList;
