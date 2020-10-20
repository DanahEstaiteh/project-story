import classes from '*.module.css';
import { ThemeProvider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
import { projectTheme } from '../../Styles/Style';
import { product } from '../../Types';
import Controls from '../Controls';
import FilterProductList from '../FilterProductList/FilterProductList';
import PopUp from '../PopUp/PopUp';
import ProductForm from '../ProductForm/ProductForm';
import Search from '../Search/Search';
import HeaderList from './HeaderList';
import ProductDataList from './productDataList';
import { productStyles } from './style';

interface ProductProps {
  productData: product[];
}

const Product: React.FC<ProductProps> = (props) => {
  const { productData } = props;
  const [data, setData] = useState<product[]>(productData);
  const [openProductEdit, setOpenopenProductEdit] = useState<boolean>(false);
  const classes = productStyles();
  const addOrEdit = (newData: product[]) => {
    setOpenopenProductEdit(false);
    setData(newData);
  };
  const handleOpenPopup = () => {
    setOpenopenProductEdit(true);
  };
  const initialValues = {
    id: 0,
    code: '',
    name: '',
    category: '',
    productDescription: '',
    tax: 0,
    price: 0,
    img: '',
    rawPrice: 0,
    count: 0,
    expirationDate: new Date(),
    color: ''
  };
  const initialErrors = {
    name: '',
    rawPrice: '',
    code: '',
    category: '',
    expirationDate: '',
    price: '',
    count: ''
  };
  const productTitle: { id: keyof product; label: string }[] = [
    { id: 'code', label: 'Code' },
    { id: 'name', label: 'Name' },
    { id: 'category', label: 'Category' },
    { id: 'productDescription', label: 'Product Description' },
    { id: 'tax', label: 'Tax(%)' },
    { id: 'price', label: 'Price' }
  ];
  useEffect(() => {
    setData(data);
  }, [data]);

  return (
    <>
      <ThemeProvider theme={projectTheme}>
        <Grid container>
          <Grid item xs={11}>
            <FilterProductList onFilter={(data) => setData(data)} />
          </Grid>
          <Grid item xs={11}>
            <div className={classes.headTwo}>
              <Controls.MyButton
                variant="contained"
                type="button"
                text="new product"
                color="secondary"
                size="medium"
                onClick={() => handleOpenPopup()}
              />
              <Search
                Data={data}
                onSearch={(data) => setData(data as product[])}
                allData={productData}
                multiProp={true}
              />
            </div>
          </Grid>
        </Grid>

        <HeaderList
          productTitle={productTitle}
          productData={data}
          onSort={(data) => setData(data)}
        />
        <ProductDataList productData={data} />
        <PopUp
          title="Add Product"
          openPopup={openProductEdit}
          setOpenPopup={setOpenopenProductEdit}
        >
          <ProductForm
            initialValues={initialValues}
            initialErrors={initialErrors}
            addOrEdit={(data) => addOrEdit(data)}
          />
        </PopUp>
      </ThemeProvider>
    </>
  );
};

export default Product;
