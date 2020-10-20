import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import { product } from '../../Types';
import { ProductDetailsStyles } from './style';
import { Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid/Grid';
import { format } from 'date-fns';
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button/Button';

interface ProductDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  Data: product[];
  code: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = (props) => {
  const { isOpen, onClose, Data, code } = props;
  const productToShow = Data.find((pro) => pro.code === code);
  const classes = ProductDetailsStyles();
  return (
    <Dialog
      maxWidth={'md'}
      open={isOpen}
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
    >
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <div className={classes.header}>
            <h3>Product Deatils</h3>
            <ClearIcon onClick={onClose} />
          </div>
          <div className={classes.container}>
            <div className={classes.first}>
              <img
                src={process.env.PUBLIC_URL + productToShow?.img}
                className={classes.media}
              />
            </div>
            <div className={classes.middle}>
              <h3>{productToShow?.name}</h3>
              <p>Raw Price :{productToShow?.rawPrice} Naira</p>
              <p>Price :{productToShow?.price} Naira</p>
              <p>Product Description :{productToShow?.productDescription}</p>
            </div>
            <div className={classes.last}>
              <div className={classes.headLast}>
                <div className={classes.itemHead}>
                  <p>Code</p>

                  <p>Quantity</p>
                </div>
                <hr style={{ width: '100%' }} />

                <div className={classes.itemValue}>
                  <p> {productToShow?.code}</p>
                  <p> {productToShow?.count}</p>
                </div>
              </div>
              <div className={classes.itemHead}>
                <p>Expiration Date</p>
                <p>
                  {' '}
                  {productToShow
                    ? format(productToShow.expirationDate, 'dd-mm-yyyy')
                    : format(12343534, 'dd/mm/yyyy')}
                </p>
              </div>
              <hr style={{ width: '100%' }} />
            </div>
          </div>

          <hr style={{ width: '100%' }} />
          <footer className={classes.footer}>
            <Button variant="outlined" onClick={onClose}>
              close
            </Button>
          </footer>
        </Paper>
      </div>
    </Dialog>
  );
};

export default ProductDetails;
