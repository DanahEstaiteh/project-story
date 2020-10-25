import { CircularProgress, ThemeProvider } from '@material-ui/core';
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
import { productTitle } from '../../Data/Data';

interface ProductProps {
  productData: product[];
}

const Product: React.FC<ProductProps> = (props) => {
  const { productData } = props;
  const [data, setData] = useState<product[]>(productData);
  const [loading, setLoading] = useState<boolean>(false);
  const [openProductEdit, setOpenopenProductEdit] = useState<boolean>(false);
  const classes = productStyles();
  const addOrEdit = (newData: product[]) => {
    setOpenopenProductEdit(false);
    setLoading(true);
    setData(newData);
  };
  const handleOpenPopup = () => {
    setOpenopenProductEdit(true);
  };
  const handleClosePopup = () => {
    setOpenopenProductEdit(false);
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

  useEffect(() => {
    setData(data);
  }, [data]);
  useEffect(() => {
    console.log({ loading });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

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
          color="#34495E"
          openPopup={openProductEdit}
          onClose={handleClosePopup}
          setOpenPopup={setOpenopenProductEdit}
        >
          <ProductForm
            initialValues={initialValues}
            initialErrors={initialErrors}
            addOrEdit={(data) => addOrEdit(data)}
            onCloseForm={handleClosePopup}
            onLoading={(isLoading) => setLoading(isLoading)}
          />
        </PopUp>
        {loading && <CircularProgress />}
      </ThemeProvider>
    </>
  );
};

export default Product;
