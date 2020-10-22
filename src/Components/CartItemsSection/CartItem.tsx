import { Paper, ListItem } from '@material-ui/core';

import React, { useEffect, useState } from 'react';
import { Item } from '../../Types/index';
import DeleteDialog from '../Dialog/DeleteDialog';
import Quantity from './Quantity';
import { cartItemStyles } from './Style';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';

interface CartItemPropsType {
  item: Item;
  onDelete: () => void;
  onChangeItemCount: (count: number) => void;
}

const CartItem: React.FC<CartItemPropsType> = (props) => {
  const { item, onChangeItemCount, onDelete } = props;

  const [count, setCount] = useState<number>(1);
  const [open, setOpen] = useState<boolean>(false);
  const classes = cartItemStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const totalPrice = React.useMemo(() => item.price * count, [count]);

  useEffect(() => {
    if (count) {
      onChangeItemCount(count);
    }
  }, [count]);
  return (
    <Paper className={classes.itemContainer}>
      <ListItem>
        <HighlightOffTwoToneIcon
          className={classes.deleteIcon}
          onClick={handleOpen}
        />
        {item.name}
      </ListItem>

      <ListItem className={classes.numberItem}>{item.price}</ListItem>
      <ListItem>
        <Quantity
          onChangeQuantity={(newCount) => {
            setCount(newCount);
          }}
        />
      </ListItem>

      <ListItem>{totalPrice} GTQ</ListItem>
      <DeleteDialog isOpen={open} onClose={handleClose} onConfirm={onDelete}>
        Are you sure you want to delete this item ?
      </DeleteDialog>
    </Paper>
  );
};

export default CartItem;
