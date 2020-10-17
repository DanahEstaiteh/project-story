import React, { useEffect, useState } from "react";
import { Grid, Box } from "@material-ui/core";
import SwapVertIcon from "@material-ui/icons/SwapVert";


import { product } from "../../Types";
import { productStyles } from "./style";
import { productData } from "../../Data/Data";
  


interface HeaderListProps {
  productTitle: string[];
  onSort: (data: product[]) => void;
  productData: product[];
}

enum sortType {
  code = 'Code',
  category = 'Category',
  price = 'Price',
  tax = 'Tax',
  name = "Name",
  productDescription = "ProductDescription"
}


const HeaderList: React.FC<HeaderListProps> = (props) => {
  const classes = productStyles();
  const { productTitle, productData, onSort } = props;
  const [sort, setSort] = useState<boolean>(false);
  const [data,setData] = useState<product[]>(productData);

  const handleSort = () => {
    setSort(!sort);
    productSort();
  };

  const productSort = () => {
    
    productData.sort((a, b) =>
      a > b ? 1 : -1
    );
    let sortedData = [...productData];
    onSort(sortedData);
  };
  
  useEffect(() => {}, [sort, data]);

  return (
    <Grid container spacing={0} className={classes.headerList}>
      {productTitle.map((title: string) => {
        if(title === "Tax(%)" ||title === "Price"  ){
          return (<Grid item xs={1}>
          <Box key={title} className={classes.headerItem}>
            {title}
            <SwapVertIcon
              onClick={() => {
                handleSort();
              }}
            />
          </Box>
        </Grid>)
        }else{
          return ( <Grid item xs={2}>
          <Box key={title} className={classes.headerItem}>
            {title}
            <SwapVertIcon
              onClick={() => {
                handleSort();
              }}
            />
          </Box>
        </Grid>)
        }
        
      })}
    </Grid>
  );
};

export default HeaderList;
