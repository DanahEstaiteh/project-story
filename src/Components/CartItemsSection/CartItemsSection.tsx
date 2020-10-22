import { Paper } from '@material-ui/core';
import Divider from '@material-ui/core/Divider/Divider';
import Grid from '@material-ui/core/Grid/Grid';
import React, { useEffect, useState } from 'react';
import { itemData } from '../../Data/Data';
import { Cart, Item } from '../../Types';
import CartTab from './CartTab';
import { cartItemStyles } from './Style';
import CartSection from './CartSection';

interface CartItemsSectionPropsTypes {
  cartList: Cart[];
}

const CartItemsSection: React.FC<CartItemsSectionPropsTypes> = (props) => {
  const { cartList } = props;
  const [data, setData] = useState<Cart[]>([]);
  const [activeCartData, setActiveCartData] = useState<Item[]>([]);
  const [active, setActive] = useState<number>(0);
  const classes = cartItemStyles();

  const handleCartDelete = (id: number) => {
    const newData = cartList.filter((item) => item.id !== id);
    setData(newData);

    console.log({ data });
  };

  useEffect(() => {
    setActiveCartData(itemData.filter((item) => item.cartId == active));
  }, [active]);

  useEffect(() => {
    console.log('in effect');
    setActiveCartData([]);
  }, [data]);

  return (
    <Paper className={classes.root}>
      <Grid container item xs={12} spacing={2} className={classes.container}>
        <Grid item xs={12}>
          <CartTab
            cartList={data}
            active={active}
            handleTab={(data) => setActive(data)}
            onDelete={handleCartDelete}
          />
          <Divider className={classes.divider} />
        </Grid>
        <Grid item xs={12}>
          <CartSection
            onDelete={() => handleCartDelete(active)}
            itemList={activeCartData}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CartItemsSection;
