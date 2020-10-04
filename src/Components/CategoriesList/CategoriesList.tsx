import React from "react";
import List from "@material-ui/core/List";
import { Divider, Grid, GridList, GridListTile, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(
  {
    root:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        
    },
    List: {
        border: '2px solid #DDDDDD',
        width: '200px',
        "&:nth-child(2)": {
          borderTop: '20px solid red'
        }
        
    },
    ListItem: {
      border: '1px solid #DDDDDD',
      width: '200px',
      height: '70px',
      "&:nth-of-type(odd)": {
        backgroundColor: '#F9F9F9',
      }
    },
  }
);
let today =new Date();
const Categories = [
  {
    CategorieName: "Nightwish",
    Actions: {
      edit: "Edit",
      delete: "Delete",
    },
    CreatedAt:today,
  },
  {
    CategorieName: "Nightwish",
    CreatedAt: today,
    Actions: {
      edit: "Edit",
      delete: "Delete",
    },
  },
  {
    CategorieName: "Nightwish",
    CreatedAt: today,
    Actions: {
      edit: "Edit",
      delete: "Delete",
    },
  },
];


function CategoriesNameList() {
  const classes = useStyles();
  return (
    <div >

      <List className={classes.List}>
        <ListItemText>
          Categories Name
        </ListItemText>
        {Categories.map(Category => (
            <ListItem className={classes.ListItem} key={Category.CategorieName}>
               <ListItemText>
               {Category.CategorieName}
               </ListItemText>
            </ListItem>
        ))}
      </List>
    </div>
  );
}
function CategoriesCreatedAtList() {
  const classes = useStyles();
  return (
    <div>
      <List className={classes.List}>
          <ListItemText>
          Created At
          </ListItemText>
        {Categories.map(CategoryDate => (
            <ListItem className={classes.ListItem} key={CategoryDate.CategorieName}>
               <ListItemText>
               {CategoryDate.CreatedAt.toDateString}
               </ListItemText>
            </ListItem>
        ))}
      </List>
    </div>
  );
}
const CategoriesActionList:React.FC =() => {
  const classes = useStyles();
  
  return (
    <div>
      <List className={classes.List}>
          <ListItemText>
          Actions
          </ListItemText>
        {Categories.map(CategoryAction => (
            <ListItem className={classes.ListItem} key={CategoryAction.Actions.delete}>
               <ListItemIcon>
               <ClearIcon /> 
               <EditIcon />
               </ListItemIcon>
            </ListItem>
        ))}
      </List>
    </div>
  );
}
function CategoriesList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
     <CategoriesNameList />
     <CategoriesCreatedAtList />
    <CategoriesActionList />
    </div>
     
    
  );
}

export default CategoriesList;
