import React, { useEffect } from "react";
import { useState } from "react";
import { Category, product } from "../../Types/index";
import TextField from "@material-ui/core/TextField/TextField";

interface SearchPropsType {
  onSearch: (newCat: product[]) => void;
  Data: product[];
  allData: product[];
  multiProp: boolean;
}

const Search: React.FC<SearchPropsType> = (props) => {
  const { onSearch, Data, allData,multiProp } = props;
  const [searchKey, setSearchKey] = useState<string>("");
 
  const handleSearch = () => {
    if (searchKey !== "" && multiProp) {
      let newData= Data.filter(x => Object.values(x)
      .join(' ')
      .toLowerCase()
      .includes(searchKey.toLowerCase()));
      onSearch(newData);
      console.log({newData});
    } else if(searchKey !== "" ){
     // let newData = Data.filter((item) =>
     // item["CategorieName"].includes(searchKey)
   // );

    //onSearch(newData);
    }else{
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
