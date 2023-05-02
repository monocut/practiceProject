import React from "react";
import style from "./ConfirmModal.module.css";

function ConfirmModal({ message, onConfirm, onCancel }) {
  return (
    <div className={style.confirm_modal}>
      <div className={style.confirm_modal_content}>
        <p>{message}</p>
        <div className={style.confirm_modal_buttons}>
          <button onClick={onConfirm}>Да</button>
          <button onClick={onCancel}>Нет</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
