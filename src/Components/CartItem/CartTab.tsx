import Button from '@material-ui/core/Button/Button';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem/ListItem';
import React, { useEffect, useState } from 'react';
import { Cart } from '../../Types';
import { cartItemStyles } from './Style';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteDialog from '../Dialog/DeleteDialog';

interface CartTAbPropsType {
  cartList: Cart[];
  active: number;
  handleTab: (a: number) => void;
  onAddOrDelete: (data: Cart[]) => void;
}

const CartTab: React.FC<CartTAbPropsType> = (props) => {
  const { cartList, active, handleTab, onAddOrDelete } = props;
  const [data, setData] = useState<Cart[]>(cartList);
  const [open, setOpen] = useState<boolean>(false);
  const classes = cartItemStyles();
  const handleAddTab = () => {
    let lastId = cartList.length ? cartList[cartList.length - 1].id : 2;
    let newCart = { id: lastId + 1, time: new Date() };
    data.unshift(newCart);
    const newData = [...data];
    setData(newData);
    console.log({ newData });
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    onAddOrDelete(data);
    console.log({ data });
  }, [data]);
  return (
    <div className={classes.appBar}>
      <List>
        <ListItem className={classes.tab}>
          <Button
            onClick={handleAddTab}
            className={`${classes.buttonIconTab} ${
              0 === active ? `${classes.selectedTab}` : ''
            }`}
          >
            <AddIcon />
          </Button>
        </ListItem>
        <ListItem className={classes.tab}>
          <Button
            onClick={handleOpen}
            className={`${classes.buttonIconTab} ${
              1 === active ? `${classes.selectedTab}` : ''
            }`}
          >
            <RemoveIcon />
          </Button>
        </ListItem>
        {cartList.map((cart) => (
          <ListItem key={cart.id + ''} className={classes.tab}>
            <Button
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
                handleTab(cart.id)
              }
              className={`${classes.buttonTab} ${
                cart.id === active ? `${classes.selectedTab}` : ''
              }`}
            >
              <div className={classes.id}>{cart.id}</div>
              <div className={classes.time}>
                {cart.time.getHours().toString() +
                  ':' +
                  cart.time.getMinutes().toString()}
              </div>
            </Button>
          </ListItem>
        ))}
        <DeleteDialog
          Data={data as Cart[]}
          id={active}
          isOpen={open}
          onDelete={(data) => setData(data as Cart[])}
          onClose={handleClose}
          dataType="cart"
        />
      </List>
    </div>
  );
};

export default CartTab;
