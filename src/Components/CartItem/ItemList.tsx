import { GridList, GridListTile } from '@material-ui/core';
import Grid from '@material-ui/core/Grid/Grid';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader/ListSubheader';
import React from 'react';
import { Item } from '../../Types';
import Quantity from './Quantity';
import { cartItemStyles } from './Style';

interface ItemListPropsType {
  itemList: Item[];
}
const headerlist = ['Product', 'Price', 'Quantity', 'Total'];

const ItemList: React.FC<ItemListPropsType> = (props) => {
  const { itemList } = props;
  const classes = cartItemStyles();
  return (
    <Grid>
      <List>
        {headerlist.map((header) => (
          <ListItem key={header} className={classes.listItem}>
            {header}
          </ListItem>
        ))}
        {itemList.map((item) => (
          <List key={item.name}>
            <ListItem className={classes.listItem}>{item.name}</ListItem>
            <ListItem className={classes.listItem}>{item.price}</ListItem>
            <ListItem className={classes.listItem}>
              <Quantity />
            </ListItem>
            <ListItem className={classes.listItem}>{item.total}</ListItem>
          </List>
        ))}
      </List>
    </Grid>
  );
};

export default ItemList;
