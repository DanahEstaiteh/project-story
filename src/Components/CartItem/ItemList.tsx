import Grid from '@material-ui/core/Grid/Grid';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import React from 'react';
import { Item } from '../../Types';
import { cartItemStyles } from './Style';
import ItemCart from './Item';

interface ItemListPropsType {
  itemList: Item[];
}
const headerlist = ['Product', 'Price', 'Quantity', 'Total'];

const ItemList: React.FC<ItemListPropsType> = (props) => {
  const { itemList } = props;
  const classes = cartItemStyles();
  return (
    <Grid>
      <List className={classes.headerList}>
        {headerlist.map((header) => (
          <ListItem key={header} className={classes.listItem}>
            {header}
          </ListItem>
        ))}
      </List>
      <List>
        {itemList.map((item) => (
          <ItemCart key={item.name} item={item} />
        ))}
      </List>
    </Grid>
  );
};

export default ItemList;
