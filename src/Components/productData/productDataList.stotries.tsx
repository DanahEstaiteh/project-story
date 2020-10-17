import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import {productData} from '../../Data/Data';
import ProductDataList from './productDataList';

export default {
    title: "product",
    Component: ProductDataList,
    
  };


  
  const Template: Story = () => <ProductDataList productData={productData} />;

  export const ProductList = Template.bind({});