import React , {useEffect} from "react";
import List from "@material-ui/core/List";
import {
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@material-ui/icons/Clear";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import EditIcon from "@material-ui/icons/Edit";
import SwapVertIcon from "@material-ui/icons/SwapVert";
import SortIcon from '@material-ui/icons/Sort';
import { SettingsSystemDaydreamTwoTone } from "@material-ui/icons";

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
  CategorieName: string;
  CreatedAt: string;
 
}

const Categories = [
  {
    id: "1",
    CategorieName: "red",
   
    CreatedAt: "22-12-2020-12",
  },
  {
    id: "2",
    CategorieName: "black",
    CreatedAt: "22-12-2020-11",
    
  },
  {
    id: "3",
    CategorieName: "yellow",
    CreatedAt: "22-12-2020-10",
    
  },
];



function CategoriesNameList() {

  const [data, setData] = React.useState<Array<Categorie>>([]);
  const [sortName, setSortName] = React.useState<boolean>(false);
  const classes = useStyles();

const CategoriesNameSort = () => {
  Categories.sort((a, b) => (a.CategorieName > b.CategorieName) ? 1 : -1)
setData(Categories);}

  useEffect(() => {
    if (sortName){
      CategoriesNameSort();
    }
  } ,[sortName]);
  
  return (
    <div>
      <List className={classes.List}>
      <ListItem>
          <ListItemText>Categorie Name</ListItemText>
          <ListItemIcon>
            <SwapVertIcon  onClick={() => setSortName(!sortName)}/>
          </ListItemIcon>
          <ListItemIcon>
            <SortIcon />
          </ListItemIcon>
        </ListItem>
        {Categories.map((Category) => (
          <ListItem className={classes.ListItem} key={Category.id}>
            <ListItemText>{Category.CategorieName}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
function CategoriesCreatedAtList() {
  const classes = useStyles();
  const [sortDate, setSortDate] = React.useState<boolean>(false);
  const [data, setData] = React.useState<Array<Categorie>>([]);

  const CategoriesDateSort = () => {
    Categories.sort((a, b) => (a.CreatedAt > b.CreatedAt) ? 1 : -1)
  setData(Categories);}

  useEffect(() => {
    if (sortDate){
      CategoriesDateSort();
    }
  } ,[sortDate]);

  return (
    <div>
      <List className={classes.List}>
      <ListItem>
          <ListItemText>Creatred At</ListItemText>
          <ListItemIcon>
            <SwapVertIcon onClick={() => setSortDate(!sortDate)}/>
          </ListItemIcon>
        </ListItem>
        {Categories.map((CategoryDate) => (
          <ListItem
            className={classes.ListItem}
            key={CategoryDate.id}
          >
            <ListItemText>{CategoryDate.CreatedAt}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
const CategoriesActionList: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <List className={classes.List}>
        <ListItem>
          <ListItemText>Actions</ListItemText>
          <ListItemIcon>
            <SwapVertIcon />
          </ListItemIcon>
        </ListItem>

        {Categories.map((CategoryAction) => (
          <ListItem
            className={classes.ListItem}
            key={CategoryAction.id}
          >
            <ListItemIcon>
              <ClearIcon />
              <EditIcon />
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
function CategoriesList() {
  const classes = useStyles();
  const [isDelete, setIsDelete] = React.useState<boolean>(false);
  return (
    <div className={classes.root}>
      <CategoriesNameList />
      <CategoriesCreatedAtList />
      <CategoriesActionList />
    </div>
  );
}

export default CategoriesList;
