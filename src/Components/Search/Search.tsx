import React, { useEffect } from 'react';
import { useState } from 'react';
import { Category, product, ProductItem } from '../../Types/index';
import TextField from '@material-ui/core/TextField/TextField';

type DataType = product | Category | ProductItem;

interface SearchPropsType {
  onSearch: (newCat: DataType[]) => void;
  Data: DataType[];
  allData: DataType[];
}

const Search: React.FC<SearchPropsType> = (props) => {
  const { onSearch, Data, allData } = props;
  const [searchKey, setSearchKey] = useState<string>('');

  const handleSearch = () => {
    if (searchKey !== '') {
      let newData = Data.filter((x) =>
        Object.values(x)
          .join(' ')
          .toLowerCase()
          .includes(searchKey.toLowerCase())
      );
      onSearch(newData);
      console.log({ newData });
    } else {
      onSearch(allData);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [searchKey]);
  return (
    <TextField
      id="standard-search"
      label="Search field"
      type="search"
      onChange={(e) => setSearchKey(e.target.value)}
    />
  );
};

export default Search;
