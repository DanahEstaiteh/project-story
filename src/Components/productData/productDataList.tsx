import { Grid, ThemeProvider } from '@material-ui/core';
import Box from '@material-ui/core/Box/Box';
import React, { useEffect, useState } from 'react';
import { product } from '../../Types';
import DescriptionIcon from '@material-ui/icons/Description';
import ClearIcon from '@material-ui/icons/Clear';
import EditIcon from '@material-ui/icons/Edit';
import { productStyles } from './style';
import TablePaginationDemo from '../Pagination/TablePaginationDemo';
import ProductDetails from '../ProductDetails/ProductDetails';
import PopUp from '../PopUp/PopUp';
import ProductForm from '../ProductForm/ProductForm';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import { projectTheme } from '../../Styles/Style';
interface ProductDataProps {
  productData: product[];
}

export const initialEditProduct = {
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
export const initialErrors = {
  name: '',
  rawPrice: '',
  code: '',
  category: '',
  expirationDate: '',
  price: '',
  count: ''
};

const ProductDataList: React.FC<ProductDataProps> = (props) => {
  const { productData } = props;

  const [data, setData] = useState<product[]>([]);
  const [openProductDetails, setOpenopenProductDetails] = useState<boolean>(
    false
  );
  const [productCode, setProductCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const pages = [5, 10, 15];
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(pages[page]);
  const [openProductEdit, setOpenopenProductEdit] = useState<boolean>(false);
  const [productForEdit, setProductForEdit] = useState<product>(
    initialEditProduct
  );
  const classes = productStyles();
  const addOrEdit = (newData: product[]) => {
    setOpenopenProductEdit(false);
    setData(newData);
  };
  const handleCloseProductDetails = () => {
    setOpenopenProductDetails(false);
  };
  const handleOpenProductDetails = (code: string) => {
    setProductCode(code);
    setOpenopenProductDetails(true);
  };
  const handleOpenEditProduct = (product: product) => {
    setProductForEdit(product);
    setOpenopenProductEdit(true);
  };
  const handleCloseEditProduct = (product: product) => {
    setOpenopenProductEdit(false);
  };

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const dataAfterPaging = () => {
    return data.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  };

  useEffect(() => {
    setData(productData);
    if (!loading) {
      console.log('hiiiiii');
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [productData]);

  return (
    <>
      <ThemeProvider theme={projectTheme}>
        <Grid container spacing={0} className={classes.list}>
          {dataAfterPaging().map((product: product) => (
            <Grid container spacing={0} className={classes.row}>
              <Grid item xs={2} className={classes.listItem}>
                <Box key={product.code}>{product.code}</Box>
              </Grid>
              <Grid item xs={2} className={classes.listItem}>
                <Box key={product.code}>{product.name}</Box>
              </Grid>
              <Grid item xs={2} className={classes.listItem}>
                <Box key={product.code}>{product.category}</Box>
              </Grid>
              <Grid item xs={2} className={classes.listItem}>
                <Box key={product.code}>{product.productDescription}</Box>
              </Grid>
              <Grid item xs={1} className={classes.listItem}>
                <Box key={product.code}>{product.tax}</Box>
              </Grid>
              <Grid item xs={1} className={classes.listItem}>
                <Box key={product.code}>{product.price}</Box>
              </Grid>
              <Grid item xs={2} className={classes.listItem}>
                <Box key={product.code}>
                  <ClearIcon className={classes.actionIcon} />
                  <DescriptionIcon
                    className={classes.actionIcon}
                    onClick={() => handleOpenProductDetails(product.code)}
                  />
                  <EditIcon
                    className={classes.actionIcon}
                    onClick={() => handleOpenEditProduct(product)}
                  />
                </Box>
              </Grid>
            </Grid>
          ))}
          <ProductDetails
            isOpen={openProductDetails}
            onClose={handleCloseProductDetails}
            Data={data}
            code={productCode}
          />
        </Grid>
        <TablePaginationDemo
          count={data.length}
          data={data}
          onChangePage={(data) => setData(data as product[])}
          onHandleChangePage={handleChangePage}
          onHandleChangeRowsPerPage={handleChangeRowsPerPage}
          page={page}
          rowsPerPage={rowsPerPage}
          pages={pages}
        />
        <PopUp
          title="Edit Product"
          color="#34495E"
          openPopup={openProductEdit}
          setOpenPopup={setOpenopenProductEdit}
        >
          <ProductForm
            initialValues={productForEdit}
            initialErrors={initialErrors}
            addOrEdit={(data) => addOrEdit(data)}
          />
        </PopUp>
        {loading && <CircularProgress />}
      </ThemeProvider>
    </>
  );
};

export default ProductDataList;
