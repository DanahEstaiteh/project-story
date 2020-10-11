import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import CategoriesList from './CategoriesList';
import {Data} from '../../App';

export default {
    title: "Category",
    Component: CategoriesList,
    
  };


  
  const Template: Story = () => <CategoriesList categoryData={Data} />;

  export const CategoryList = Template.bind({});