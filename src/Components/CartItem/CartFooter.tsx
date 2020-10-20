import { List, ListItem, TextField } from '@material-ui/core';
import Box from '@material-ui/core/Box/Box';
import Divider from '@material-ui/core/Divider/Divider';
import React, { useEffect, useState } from 'react';
import { cartFooterStyles } from './FooterStyle';

interface CartFooterPropsType {
  totalPrice: number;
  itemsQuantity: number;
}

const CartFooter: React.FC<CartFooterPropsType> = (props) => {
  const { totalPrice, itemsQuantity } = props;
  const [tax, setTax] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [total, setTotal] = useState<number>(totalPrice);

  const handleDiscountChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let newDiscount = parseInt(e.target.value, 10);
    setDiscount(newDiscount ? newDiscount : 0);
  };
  const handleTaxChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let newTax = parseInt(e.target.value, 10);
    setTax(newTax ? newTax : 0);
  };
  const classes = cartFooterStyles();
  useEffect(() => {
    let taxEffect = totalPrice * (tax / 100);
    let discountEffect = (discount / 100) * totalPrice;
    let newTotalPrice = taxEffect + totalPrice - discountEffect;
    setTotal(newTotalPrice);
  }, [tax, discount]);
  return (
    <>
      <List className={classes.list}>
        <ListItem>
          <Box className={classes.topic}>Sub Total</Box>
          <div className={classes.data}>
            <Box>{totalPrice} GTQ</Box>
            <Box>{itemsQuantity} items</Box>
          </div>
        </ListItem>
        <Divider />
        <ListItem>
          <Box className={classes.topic}>Order TAX</Box>
          <div className={classes.data}>
            <Box>
              <input
                className={classes.discountText}
                type="text"
                value={tax}
                onChange={(
                  e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
                ) => handleTaxChange(e)}
              />
            </Box>
            <Box>{(totalPrice * tax) / 100} GTQ</Box>
          </div>
        </ListItem>
        <Divider />
        <ListItem>
          <Box className={classes.topic}>Discount</Box>
          <div className={classes.data}>
            <Box>
              <input
                className={classes.discountText}
                type="text"
                value={discount}
                onChange={(
                  e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
                ) => handleDiscountChange(e)}
              />
            </Box>
            <Box>{(totalPrice * discount) / 100} GTQ</Box>
          </div>
        </ListItem>
        <Divider />
        <ListItem>
          <Box className={classes.topic}>Total</Box>
          <Box className={classes.total}>{total} GTQ</Box>
        </ListItem>
      </List>
    </>
  );
};

export default CartFooter;
