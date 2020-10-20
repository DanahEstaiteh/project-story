import { Paper } from '@material-ui/core';
import Divider from '@material-ui/core/Divider/Divider';
import Grid from '@material-ui/core/Grid/Grid';
import React, { useEffect, useState } from 'react';
import { itemData } from '../../Data/Data';
import { Cart } from '../../Types';
import CartTab from './CartTab';
import ItemList from './ItemList';
import { cartItemStyles } from './Style';

interface CartItemPropsTypes {
  cartList: Cart[];
}

const CartItem: React.FC<CartItemPropsTypes> = (props) => {
  const { cartList } = props;
  const [data, setData] = useState<Cart[]>(cartList);
  const [active, setActive] = useState<number>(0);
  const classes = cartItemStyles();
  useEffect(() => {}, [data]);
  return (
    <Paper className={classes.root}>
      <Grid container item xs={12} spacing={2} className={classes.container}>
        <Grid item xs={12}>
          <CartTab
            cartList={data}
            active={active}
            handleTab={(data) => setActive(data)}
            onAddOrDelete={(data) => setData(data)}
          />
          <Divider className={classes.divider} />
        </Grid>
        <Grid item xs={12}>
          <ItemList itemList={itemData} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CartItem;
