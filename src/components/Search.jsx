import { Divider, Input } from "antd";

const Search = ({ searchInput, setSearchInput }) => {
  const searchFilter = (searchValue) => {
    setSearchInput(searchValue);
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
