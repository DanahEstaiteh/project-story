import React, { useEffect, useState } from "react";
import { product } from "../../Types";
import Controls from "../Controls";
import PopUp from "../PopUp/PopUp";
import ProductForm from "../ProductForm/ProductForm";
import Search from "../Search/Search";
import HeaderList from "./HeaderList";
import ProductDataList from "./productDataList";

interface ProductProps {
  productData: product[];
}

const Product: React.FC<ProductProps> = (props) => {
  const { productData } = props;
  const [data, setData] = useState<product[]>(productData);
  const [openProductEdit, setOpenopenProductEdit] = useState<boolean>(false);
  const handleOpenPopup = () => {
    
    setOpenopenProductEdit(true);
  };
  const handleCloseEditProduct = (product : product) => {
    setOpenopenProductEdit(false);
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
      <Search
        Data={data}
        onSearch={(data) => setData(data)}
        allData={productData}
        multiProp={true}
      />
      <Controls.MyButton
        variant="contained"
        type="button"
        text="new product"
        color="primary"
        size="medium"
        onClick={() => handleOpenPopup()}
      />
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
