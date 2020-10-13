import React, { useEffect, useState } from "react";
import { Grid, Box } from "@material-ui/core";
import SwapVertIcon from "@material-ui/icons/SwapVert";

import { Category } from "../../Types";
import { categoryStyles } from "./Styles";

interface HeaderListProps {
  categoryTitle: string[];
  onSort: (data: Category[]) => void;
  categoryData: Category[];
}

const HeaderList: React.FC<HeaderListProps> = (props) => {
  const classes = categoryStyles();
  const { categoryTitle, categoryData, onSort } = props;
  const [sort, setSort] = useState<boolean>(false);
  const [data] = useState<Category[]>(categoryData);

  const handleSort = (title: string) => {
    setSort(!sort);
    if (title === "CreatedAt") {
      CategoryDateSort();
    } else {
      CategoryNameSort();
    }
  };

  const CategoryNameSort = () => {
    categoryData.sort((a, b) =>
      a["CategorieName"] > b["CategorieName"] ? 1 : -1
    );
    let sortedData = [...categoryData];
    onSort(sortedData);
  };
  const CategoryDateSort = () => {
    categoryData.sort((a, b) => (a["CreatedAt"] > b["CreatedAt"] ? 1 : -1));
    let sortedData = [...categoryData];
    onSort(sortedData);
  };
  useEffect(() => {}, [sort, data]);

  return (
    <Grid container spacing={0} className={classes.headerList}>
      {categoryTitle.map((title: string) => (
        <Grid item xs={4}>
          <Box key={title} className={classes.headerItem}>
            {title}
            <SwapVertIcon
              onClick={() => {
                handleSort(title);
              }}
            />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default HeaderList;
