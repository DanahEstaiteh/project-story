import Grid from '@material-ui/core/Grid/Grid';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import React, { useState } from 'react';
import { Item } from '../../Types';
import { cartItemStyles } from './Style';
import ItemList from './ItemList';
import DeleteDialog from '../Dialog/DeleteDialog';
import CartFooter from './CartFooter';

interface ItemListPropsType {
  itemList: Item[];
}
const headerlist = ['Product', 'Price', 'Quantity', 'Total'];

const ItemSection: React.FC<ItemListPropsType> = (props) => {
  const { itemList } = props;
  const [data, setData] = useState<Item[]>(itemList);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalCount, setTotalCount] = useState<number>(0);
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
      <ItemList
        itemList={data}
        onDelete={(data) => setData(data)}
        onChangeCount={(count) => setTotalCount(count)}
        onChangePrice={(price) => setTotalPrice(price)}
      />
      <CartFooter totalPrice={totalCount} itemsQuantity={totalCount} />
    </Grid>
  );
};

export default ItemSection;
