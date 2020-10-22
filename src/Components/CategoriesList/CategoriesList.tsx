import React, { useEffect, useState } from 'react';
import { Grid, Box } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import EditIcon from '@material-ui/icons/Edit';
import { format } from 'date-fns';

import EditDialog from '../Dialog/EditDialog';

import { Category } from '../../Types';
import { categoryStyles } from './Styles';
import Search from '../Search/Search';
import TablePaginationDemo from '../Pagination/TablePaginationDemo';
import AddNew from '../AddNew/AddNew';
import HeaderList from './HeaderList';
import DeleteDialog from '../Dialog/DeleteDialog';
import { categoryTitle } from '../../Data/Data';

interface CategoryListProps {
  categoryData: Category[];
}

const CategoryData: React.FC<CategoryListProps> = (props) => {
  const classes = categoryStyles();
  const { categoryData } = props;
  const [data, setData] = useState<Category[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [openEditDialog, setOpenEditDialog] = useState<boolean>(false);
  const [itemId, setItemId] = useState<string>('');
  const [itemName, setItemName] = useState<string>('');
  const pages = [5, 10, 15];
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(pages[page]);

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

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };
  const handleOpenEditDialog = (Name: string) => {
    setItemName(Name);
    setOpenEditDialog(true);
  };
  const handleDelete = (id: string) => {
    setItemId(id);
    handleOpen();
  };

  useEffect(() => {
    setData(categoryData);
  }, [categoryData]);

  return (
    <>
      <Grid container spacing={0} className={classes.list}>
        {dataAfterPaging().map((Category: Category) => (
          <Grid container spacing={0} className={classes.row}>
            <Grid item xs={4} className={classes.listItem}>
              <Box key={Category.id}>{Category.categoryName}</Box>
            </Grid>
            <Grid item xs={4} className={classes.listItem}>
              <Box key={Category.id}>
                {format(Category.createdAt, 'dd-mm-yyyy tt')}
              </Box>
            </Grid>
            <Grid item xs={4} className={classes.listItem}>
              <Box key={Category.id}>
                <ClearIcon
                  className={classes.actionIcon}
                  onClick={() => handleDelete(Category.id)}
                />
                <EditIcon
                  className={classes.actionIcon}
                  onClick={() => handleOpenEditDialog(Category.categoryName)}
                />
              </Box>
            </Grid>
          </Grid>
        ))}
        <DeleteDialog
          isOpen={open}
          onClose={handleClose}
          onConfirm={() => {}}
        />
        <EditDialog
          Data={data}
          CategoryName={itemName}
          isOpen={openEditDialog}
          onSubmit={(data) => setData(data)}
          onClose={handleCloseEditDialog}
        />
      </Grid>
      <TablePaginationDemo
        count={data.length}
        data={data}
        onChangePage={(data) => setData(data as Category[])}
        onHandleChangePage={handleChangePage}
        onHandleChangeRowsPerPage={handleChangeRowsPerPage}
        page={page}
        rowsPerPage={rowsPerPage}
        pages={pages}
      />
    </>
  );
};

const CategoriesList: React.FC<CategoryListProps> = (props) => {
  const { categoryData } = props;
  const [data, setData] = useState<Category[]>(categoryData);

  useEffect(() => {
    setData(data);
  }, [data]);
  const classes = categoryStyles();
  return (
    <>
      <header className={classes.header}>
        <AddNew onSubmit={(data) => setData(data)} Data={data} />
        {/* <Search
          Data={data}
          onSearch={(data) => setData(data)}
          allData={categoryData}
          multiProp={false}
        /> */}
      </header>
      <HeaderList
        categoryTitle={categoryTitle}
        categoryData={data}
        onSort={(data) => setData(data)}
      />
      <CategoryData categoryData={data} />
    </>
  );
};

export default CategoriesList;
