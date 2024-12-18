import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={s.container}>
      <p className={s.text}>Find contact by name</p>
      <input
        className={s.input}
        type="text"
        onChange={handleChange}
        placeholder="Search contacts..."
        aria-label="Search contacts by name"
        maxLength="50"
      />
    </div>
  );
};

export default SearchBox;
