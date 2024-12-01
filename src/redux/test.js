import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label>
      Find contacts by name
      <input type="text" onChange={handleChange} />
    </label>
  );
};

export default SearchBox;
