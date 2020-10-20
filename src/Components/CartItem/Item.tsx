import React, { useState } from 'react';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import Grid from '@material-ui/core/Grid/Grid';
import { Item } from '../../Types/index';
import Quantity from './Quantity';
import { SelectedRowCount } from '@material-ui/data-grid';
import { cartItemStyles } from './Style';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';

interface ItemPropsType {
  item: Item;
}

const ItemCart: React.FC<ItemPropsType> = (props) => {
  const { item } = props;
  const [count, setCount] = useState<number>(0);
  const classes = cartItemStyles();
  return (
    <Paper className={classes.itemContainer}>
      <ListItem>
        <HighlightOffTwoToneIcon className={classes.deleteIcon} />
        {item.name}
      </ListItem>

      <ListItem className={classes.numberItem}>{item.price}</ListItem>
      <ListItem>
        <Quantity onChangeQuantity={(count) => setCount(count)} />
      </ListItem>

      <ListItem>{item.price * count} GTQ</ListItem>
    </Paper>
  );
};

export default ItemCart;
