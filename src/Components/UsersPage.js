import React, { useState } from "react";
import style from "../Components/UsersPage.module.css";
import editButton from "../images/edit-icon.png";
import deleteButton from "../images/delete-icon.png";

const UsersPage = ({ users, removeUserItem, setNewUserName }) => {
  const [inputValue, setInputValue] = useState("");
  const [editingUserId, setEditingUserId] = useState(null);

  //

  function handleRemoveUserItem(userId) {
    removeUserItem(userId);
  }

  function onButtonEdit(id) {
    setEditingUserId(id);
  }

  function handleInputChange(e) {
    setInputValue(e.currentTarget.value);
  }

  function onButtonSave(id) {
    setNewUserName(id);
    console.log(inputValue);
  }

  return (
    <div className={style.items}>
      <ul>
        {users.map((el) => (
          <li key={el.id}>
            {el.id === editingUserId ? (
              <form>
                <label>
                  User:
                  <input onChange={handleInputChange}></input>
                </label>
                <label>
                  Id:
                  <input value={el.id} onChange={handleInputChange}></input>
                </label>
                <button onClick={() => onButtonSave(el.id)}>Save</button>
              </form>
            ) : (
              <div>
                <span>User: {el.name} </span>
                <span>Id: {el.id}</span>
              </div>
            )}
            <div className={style.buttons}>
              <button>
                <img
                  onClick={() => onButtonEdit(el.id)}
                  src={editButton}
                  alt="editBtn"
                ></img>
              </button>
              <button onClick={() => handleRemoveUserItem(el.id)}>
                <img src={deleteButton} alt="deleteBtn"></img>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
