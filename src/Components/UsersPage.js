import React, { useState } from "react";
import style from "../Components/UsersPage.module.css";
import editButton from "../images/edit-icon.png";
import deleteButton from "../images/delete-icon.png";
import ConfirmModal from "./ConfirmModal";

const UsersPage = ({ users, removeUserItem, setNewUserName }) => {
  const [inputValue, setInputValue] = useState("");
  const [editingUserId, setEditingUserId] = useState(null);
  const [inputActive, setInputActive] = useState(false);
  const [previousName, setPreviousName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [idDeletedUser, setIdDeletedUser] = useState(null);

  //modal

  function handleRemoveUserItem(userId) {
    setShowModal(true);
    setIdDeletedUser(userId);
  }

  function handleConfirm() {
    setShowModal(false);
    if (idDeletedUser !== null) {
      removeUserItem(idDeletedUser);
    }
  }
  function handleCancel() {
    setShowModal(false);
  }

  function onButtonEdit(id, name) {
    setEditingUserId(id);
    setInputValue(name);
    setPreviousName(name);
  }

  function handleInputChange(e) {
    setInputValue(e.currentTarget.value);
  }

  function onSubmit(e) {
    e.preventDefault();
  }

  function onButtonSave(id) {
    setNewUserName(id, inputValue);
  }

  function onButtonCancel(id) {
    setNewUserName(id, previousName);
  }

  //размытие фона

  const handleInputFocus = () => {
    setInputActive(true);
  };

  const handleInputCancel = () => {
    setInputActive(false);
  };

  const handleInputBlur = () => {
    setEditingUserId(null);
    setInputActive(false);
  };
  const modalClasses = [style.modal];
  if (inputActive) {
    modalClasses.push(style["modal_blur"]);
  }

  return (
    <div className={style.container}>
      <div className={style.items}>
        <div className={modalClasses.join(" ")}>
          <ul>
            {users.map((el) => (
              <li key={el.id}>
                {el.id === editingUserId ? (
                  <form onSubmit={onSubmit}>
                    <label>
                      User:{" "}
                      <input
                        onChange={handleInputChange}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        autoFocus={true}
                        value={inputValue}
                      ></input>
                    </label>{" "}
                    <label>
                      Id:
                      <span>{el.id}</span>
                    </label>
                    <button onMouseDown={() => onButtonSave(el.id)}>
                      Save
                    </button>
                    <button
                      onBlur={handleInputCancel}
                      onMouseDown={() => onButtonCancel(el.id)}
                    >
                      Cancel
                    </button>
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
                      onClick={() => onButtonEdit(el.id, el.name)}
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

        <div>
          {showModal && (
            <ConfirmModal
              message={"Вы уверены что хотите удалить?"}
              onConfirm={handleConfirm}
              onCancel={handleCancel}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
