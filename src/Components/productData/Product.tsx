import classes from "*.module.css";
import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import { product } from "../../Types";
import Controls from "../Controls";
import FilterProductList from "../FilterProductList/FilterProductList";
import PopUp from "../PopUp/PopUp";
import ProductForm from "../ProductForm/ProductForm";
import Search from "../Search/Search";
import HeaderList from "./HeaderList";
import ProductDataList from "./productDataList";
import { productStyles } from "./style";

interface ProductProps {
  productData: product[];
}


const Product: React.FC<ProductProps> = (props) => {
  const { productData } = props;
  const [data, setData] = useState<product[]>(productData);
  const [openProductEdit, setOpenopenProductEdit] = useState<boolean>(false);
  const classes = productStyles();

  const handleOpenPopup = () => {
    
    setOpenopenProductEdit(true);
  };
  const initialValues={
    id:0,
    code: "",
    name: "",
    category: "",
    productDescription: "",
    tax: 0,
    price: 0,
    img: "",
    rawPrice: 0,
    count: 0,
    expirationDate: new Date,
  }
  const initialErrors = {
    name: "",
   rawPrice:  "",
   code:  "",
   category:  "",
   expirationDate:  "",
   price:  "",
   count:  "",
  }
  const productTitle: string[] = [
    "Code",
    "Name",
    "Category",
    "Product Description",
    "Tax(%)",
    "Price",
    "Actions",
  ];
  useEffect(() => {
    setData(data);
  }, [data]);

  return (
    <>
    <Grid container >
      <Grid item xs={11}>
      <FilterProductList onFilter={data => setData(data)}/>
      </Grid>
      <Grid item xs={11}>
      <div className={classes.headTwo}>
      <Controls.MyButton
        variant="contained"
        type="button"
        text="new product"
        color="primary"
        size="medium"
        onClick={() => handleOpenPopup()}
      />
      <Search
        Data={data}
        onSearch={(data) => setData(data)}
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
                <ProductForm initialValues={initialValues}  initialErrors={initialErrors}  />
                               
            </PopUp>
    </>
  );
};

export default Product;
