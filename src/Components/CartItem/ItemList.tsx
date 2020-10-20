import React, { useEffect, useState } from 'react';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import Grid from '@material-ui/core/Grid/Grid';
import { Item } from '../../Types/index';
import Quantity from './Quantity';
import { SelectedRowCount } from '@material-ui/data-grid';
import { cartItemStyles } from './Style';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import DeleteDialog from '../Dialog/DeleteDialog';
import List from '@material-ui/core/List/List';
import CartItem from './CartItem';

interface ItemPropsType {
  itemList: Item[];
  onDelete: (data: Item[]) => void;
  onChangeCount: (data: number) => void;
  onChangePrice: (data: number) => void;
}

const ItemList: React.FC<ItemPropsType> = (props) => {
  const { itemList, onDelete, onChangeCount, onChangePrice } = props;
  //const [countItem, setCountItem] = useState<number>(0);
  const [item, setItem] = useState<{ count: number; price: number }>({
    count: 0,
    price: 0
  });
  const [countItem, setCountItem] = useState<number>(item.count);
  const [data, setData] = useState<Item[]>(itemList);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
  const classes = cartItemStyles();

  useEffect(() => {
    if (item.count) {
      setTotalCount(totalCount + item.count);
      setTotalPrice(item.price * item.count + totalPrice);
    }

    console.log({ totalCount, totalPrice });

    onDelete(data);
  }, [data, item]);
  return (
    <List>
      {itemList.map((item: Item) => (
        <CartItem
          itemList={data}
          item={item}
          onDelete={(data) => setData(data)}
          onChangeItemCount={(data) => {
            setItem(data);
          }}
        />
      ))}
    </List>
  );
};

export default ItemList;
