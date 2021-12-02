import React from "react";
import styles from "./SearchBar.module.css";
import { API } from "Api/API";

export const SearchBar = (props) => {
  const [isActive, setIsActive] = React.useState(false);
  const searchInput = React.useRef();
  const onSearch = async (e) => {
    e.preventDefault();
    try {
      if (!isActive) {
        searchInput.current.focus();
        setIsActive(true);
      } else {
        const response = await API.get("search/photos", {
          params: {
            query: searchInput.current.value,
            page: 5,
            per_page: 50,
          },
        });
        setIsActive(false);
        props.onSearchImage(response.data.results);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.topNav}>
      <form
        className={`${styles.search} ${
          isActive ? styles.active : ""
        } `}
        onSubmit={onSearch}
      >
        <input
          ref={searchInput}
          type="text"
          placeholder="Search..."
          className={styles.input}
        />
        <button onClick={onSearch} className={styles.btn}>
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};
