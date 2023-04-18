import React, { useState } from "react";
import style from "./ShowSearchHistory.module.css";

const ShowSearchHistory = ({
  searchHistory,
  clearStoryData,
  removeStoryItem,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [sortByName, setSortByName] = useState(false);

  function sortAZ(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  function sortZA(a, b) {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
    return 0;
  }

  const handleClearStory = () => {
    clearStoryData();
  };

  const handleRemoveStoryItem = (index) => {
    removeStoryItem(index);
  };

  const handleSortInputValue = (e) => {
    setInputValue(e.currentTarget.value);
  };

  const filteredSeachHistory = searchHistory.filter((el) =>
    el.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  const showByName = () => {
    setSortByName(!sortByName);
    if (sortByName) {
      searchHistory.sort(sortAZ);
    } else {
      searchHistory.sort(sortZA);
    }
  };

  return (
    <div className={style.container}>
      Story of search:
      <button onClick={handleClearStory} className={style.btn_clear}>
        Очистить
      </button>
      <div className={style.ul_result}>
        {" "}
        {searchHistory && (
          <ul>
            {filteredSeachHistory.map((el) => (
              <li key={el.date}>
                <div>
                  ID: {el.id} Name: {el.name} Date: {el.date}
                </div>
                <div>
                  <button onClick={() => handleRemoveStoryItem(el.date)}>
                    x
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      Поиск по имени:{" "}
      <input className={style.inp} onChange={handleSortInputValue}></input>
      Сортировать:
      <button onClick={showByName}>по имени</button>
    </div>
  );
};

export default ShowSearchHistory;
