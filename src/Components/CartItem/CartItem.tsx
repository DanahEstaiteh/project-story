import classes from '*.module.css';
import { Paper, ListItem } from '@material-ui/core';
import { count, countReset } from 'console';
import React, { useEffect, useState } from 'react';
import { Item } from '../../Types/index';
import DeleteDialog from '../Dialog/DeleteDialog';
import Quantity from './Quantity';
import { cartItemStyles } from './Style';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';

interface CartItemPropsType {
  item: Item;
  itemList: Item[];
  onDelete: (data: Item[]) => void;
  onChangeItemCount: (data: { count: number; price: number }) => void;
}

const CartItem: React.FC<CartItemPropsType> = (props) => {
  const { item, itemList, onDelete, onChangeItemCount } = props;
  const [preCount, setPreCount] = useState<number>(0);
  const [count, setCount] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(count * item.price);
  const [data, setData] = useState<Item[]>(itemList);
  const [open, setOpen] = useState<boolean>(false);
  const [deletedItemId, setDeletedItemId] = useState<number>(0);
  const classes = cartItemStyles();
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (id: number) => {
    setDeletedItemId(id);
    setOpen(true);
  };

  useEffect(() => {
    if (count) {
      setTotalPrice(item.price * count);
      onChangeItemCount({
        count: count - preCount,
        price: item.price
      });
    }
    console.log({ preCount, count, totalPrice });
    onDelete(data);
  }, [data, totalPrice, count]);
  return (
    <Paper className={classes.itemContainer}>
      <ListItem>
        <HighlightOffTwoToneIcon
          className={classes.deleteIcon}
          onClick={() => handleDelete(item.id)}
        />
        {item.name}
      </ListItem>

      <ListItem className={classes.numberItem}>{item.price}</ListItem>
      <ListItem>
        <Quantity
          onChangeQuantity={(newCount) => {
            setPreCount(count);
            setCount(newCount);
          }}
        />
      </ListItem>

      <ListItem>{item.price * count} GTQ</ListItem>
      <DeleteDialog
        Data={data as Item[]}
        id={deletedItemId}
        isOpen={open}
        onDelete={(data) => setData(data as Item[])}
        onClose={handleClose}
        dataType="item"
      />
    </Paper>
  );
};

export default CartItem;
