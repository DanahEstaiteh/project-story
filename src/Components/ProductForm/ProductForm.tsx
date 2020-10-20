import { Button, Grid, ThemeProvider } from '@material-ui/core';
import React, { useState } from 'react';
import { categoryData, productData } from '../../Data/Data';
import { Errors, product } from '../../Types';
import { getCategoryName } from '../CategoriesList/CategoryFunctions';
import Controls from '../Controls/index';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { ProductFormStyles } from './Style';
import { addNewProduct, updateProduct } from '../productData/ProductFunction';
import { projectTheme } from '../../Styles/Style';

interface ProductFprmPropsType {
  initialValues: product;
  initialErrors: Errors;
  addOrEdit: (newData: product[]) => void;
}

const ProductForm: React.FC<ProductFprmPropsType> = (props) => {
  const { initialValues, initialErrors, addOrEdit } = props;
  const [data, setData] = useState<product[]>(productData);
  const [values, setValues] = useState<product>(initialValues);
  const [errors, setErrors] = useState<Errors>(initialErrors);
  const classes = ProductFormStyles();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
    console.log('input' + { values });
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.name as string;
    const value = e.target.value as string;
    setValues({
      ...values,
      [name]: value
    });
    console.log({ values });
  };

  const handleDateChange = (date: Date) => {
    setValues({
      ...values,
      ['expirationDate']: date
    });
    console.log({ values });
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ('name' in fieldValues)
      temp.name = fieldValues.name ? '' : 'Product Name is Required !';

    if ('rawPrice' in fieldValues)
      temp.rawPrice = fieldValues.rawPrice ? '' : 'Raw Price is Required !';
    if ('price' in fieldValues)
      temp.price = fieldValues.price ? ' ' : 'Price is Required !';
    if ('price' in fieldValues)
      temp.price = fieldValues.price > 0 ? '' : 'Price must be larger than 0 !';
    if ('price' in fieldValues)
      temp.price =
        fieldValues.price > fieldValues.rawPrice
          ? ''
          : 'Price must be larger than Raw Price !';
    if ('code' in fieldValues)
      temp.code = fieldValues.code.match(/^[0-9a-zA-Z]+$/)
        ? ''
        : 'Product code must contain letter and number only';
    if ('code' in fieldValues)
      temp.code = fieldValues.code ? '' : 'Product code is Required!';
    setErrors({
      ...temp
    });
    console.log({ temp });
    if (fieldValues == values) return Object.values(temp).every((x) => x == '');
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validate()) {
      console.log('before if normal ');
      if (initialValues.id !== 0) {
        let editData = updateProduct(values);
        setData(editData);
        console.log({ editData });
      } else {
        let newData = addNewProduct(values);
        setData(newData);
        console.log({ newData });
      }

      addOrEdit(data);
    }
    console.log({ data });
  };

  return (
    <ThemeProvider theme={projectTheme}>
      <form onSubmit={handleSubmit} className={classes.root} autoComplete="off">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Controls.Input
              id="Name"
              name="name"
              label="Name"
              value={values.name}
              error={errors.name}
              type="text"
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <Controls.Input
              id="Raw Price"
              name="rawPrice"
              label="Raw Price"
              type="text"
              value={values.rawPrice}
              error={errors.rawPrice}
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <Controls.Input
              id="Price"
              name="price"
              label="Price"
              type="text"
              value={values.price}
              error={errors.price}
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12}>
            <Controls.Input
              id="Code"
              name="code"
              label="Code"
              type="text"
              value={values.code}
              error={errors.code}
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>

          <Grid item xs={12}>
            <Controls.Input
              id="Stock Count"
              name="count"
              label="Stock Count"
              type="text"
              value={values.count}
              error={errors.count}
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={12}>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
              onChange={(event) => {
                console.log(event.target.files);
              }}
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" color="secondary" component="span">
                Upload
              </Button>
            </label>
          </Grid>
          <Grid item xs={12}>
            <Controls.Select
              name="category"
              label="Category"
              value={values.category}
              error={errors.category}
              onChange={(e) => handleSelectChange(e)}
              options={getCategoryName(categoryData)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextareaAutosize
              className={classes.textArea}
              aria-label="minimum height"
              rowsMin={5}
              placeholder="Product Description"
            />
          </Grid>
          <Grid item xs={12}>
            <Controls.DatePicker
              name="expirationDate"
              onChange={(date) => handleDateChange(date)}
              minDate={new Date()}
            />
          </Grid>
          <Grid item xs={12}>
            <div>
              <Controls.MyButton
                text="Submit"
                color="secondary"
                variant="contained"
                size="medium"
                type="submit"
              />
              <Controls.MyButton
                text="Close"
                color="default"
                variant="contained"
                size="medium"
                type="button"
              />
            </div>
          </Grid>
        </Grid>
      </form>
    </ThemeProvider>
  );
};

export default ProductForm;
