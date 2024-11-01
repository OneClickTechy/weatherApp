import { useContext } from "react";
import { SearchValueContext } from "../../App";

const SearchBar = () => {
  const { searchValue, setSearchValue, handleSearchWeather } = useContext(SearchValueContext);
  return (
    <form className="grid grid-cols-3 p-2" onSubmit={handleSearchWeather}>
      <input
        type="text"
        placeholder="Search for cities"
        className="bg-background-navy2 placeholder:text-text-gray text-sm p-2 col-span-2  rounded-2xl"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
