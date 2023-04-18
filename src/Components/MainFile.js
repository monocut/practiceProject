import React from "react";
import { useState } from "react";
import style from "./MainFile.module.css";

const MainFile = ({ setUserData, user, clearUserData }) => {
  const [inputValue, setInputValue] = useState("");

  async function fetchData(id) {
    const response = await fetch(
      `https://foxunit-x.npkn.net/nn0k4jbmeu/${id}?`
    );
    const result = await response.json();
    setUserData(result);
  }

  const onClickHandler = () => {
    fetchData(inputValue);
  };

  const handleInputChange = (e) => {
    setInputValue(e.currentTarget.value);
  };
  const handleClearUser = () => {
    clearUserData();
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        Введите ID Пользователя:
        <input onChange={handleInputChange}></input>
        <button onClick={onClickHandler}>Найти</button>
        <button onClick={handleClearUser}>Очистить</button>
        {user && (
          <p>
            Пользователь с ID: {user.id} Имя: {user.name}
          </p>
        )}
      </div>
    </div>
  );
};

export default MainFile;
