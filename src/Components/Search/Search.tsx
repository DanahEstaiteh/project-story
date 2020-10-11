import React, { useEffect } from "react";
import { useState } from "react";
import { Categorie } from "../../Types/index";
import TextField from "@material-ui/core/TextField/TextField";

interface SearchPropsType {
  onSearch: (newCat: Categorie[]) => void;
  Data: Categorie[];
  allData: Categorie[];
}

const Search: React.FC<SearchPropsType> = (props) => {
  const { onSearch, Data, allData } = props;
  const [searchKey, setSearchKey] = useState<string>("");
  console.log({ Data });
  const handleSearch = () => {
    if (searchKey !== "") {
      let newData = Data.filter((item) =>
        item["CategorieName"].includes(searchKey)
      );

      onSearch(newData);
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
