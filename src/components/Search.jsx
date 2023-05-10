import { Divider, Input } from "antd";
import { useState } from "react";

const Search = ({ setfoodsState, foodsState }) => {
  const [searchInput, setSearchInput] = useState("");

  const searchFilter = (searchValue) => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = foodsState.filter((food) => {
        return food.name.toLowerCase().includes(searchInput.toLowerCase());
      });
      setfoodsState(filteredData);
    } else {
      setfoodsState(foodsState);
    }
  };

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        name="searchInput"
        value={searchInput}
        type="text"
        onChange={(event) => {
          searchFilter(event.target.value);
        }}
      />
    </>
  );
};

export default Search;
