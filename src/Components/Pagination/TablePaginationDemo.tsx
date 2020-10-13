import React from "react";
import TablePagination from "@material-ui/core/TablePagination";
import { Category, product } from "../../Types";

type DataType = product;

type PaginationProps ={
  data: DataType[];
  onChangePage: (newData: DataType[] ) => void;
  count: number;
  onHandleChangePage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => void;
  onHandleChangeRowsPerPage: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  page: number;
  rowsPerPage: number;
  pages: number[];
}

const TablePaginationDemo: React.FC<PaginationProps>= (props) => {
  const {
    count,
    onHandleChangePage,
    onHandleChangeRowsPerPage,
    page,
    rowsPerPage,
    pages,
  } = props;

  return (
    <TablePagination
      component="div"
      count={count}
      page={page}
      onChangePage={onHandleChangePage}
      rowsPerPage={rowsPerPage}
      onChangeRowsPerPage={onHandleChangeRowsPerPage}
      rowsPerPageOptions={pages}
    />
  );
};

export default TablePaginationDemo;
