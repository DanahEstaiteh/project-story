import Box from '@material-ui/core/Box/Box';
import Grid from '@material-ui/core/Grid/Grid';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ProductItem } from '../../Types';
import { stockItemStyles } from './Style';

interface ProductItemsProps {
  products: ProductItem[];
}

interface ProductPriceAndNameProps {
  name: string;
  price: number;
}

const ProductItems = (props: ProductItemsProps) => {
  const { products } = props;
  const classes = stockItemStyles();

  const handleMouseOver = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    count: number
  ) => {
    e.currentTarget.innerHTML = '<p>' + count + '</p>';
    console.log(e.currentTarget);
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    price: number,
    name: string
  ) => {
    e.currentTarget.innerHTML =
      '<p>' + name + '</p>' + '<p>' + price + ' EURO</p>';
    console.log(e.currentTarget.innerHTML);
  };

  return (
    <Grid container className={classes.container}>
      {products.map((item) => (
        <Grid item xs={2} key={item.name}>
          <Box
            id={item.name}
            className={classes.box}
            style={{
              backgroundColor: item.color,
              backgroundImage: `Url(${process.env.PUBLIC_URL + item.img})`
            }}
            onMouseOver={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
              handleMouseOver(e, item.count)
            }
            onMouseLeave={(e: React.MouseEvent<HTMLElement, MouseEvent>) =>
              handleMouseLeave(e, item.price, item.name)
            }
          >
            <p>{item.name}</p>
            <p>{item.price} EURO </p>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductItems;
