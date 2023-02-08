import React, { useState } from "react";
import styles from "./TodoItem.module.css";

function TodoItem(props) {
  let [edit, setEditing] = useState(false);

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  // destructure
  const { completed, id, title } = props.todo;

  let handleEditing = () => {
    setEditing((edit = true));
  };

  let handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setEditing((edit = false));
    }
  };

  let viewMode = {};
  let editMode = {};

  if (edit) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>{title}</span>
        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          value={title}
          onChange={(e) => {
            props.setUpdate(e.target.value, id);
          }}
          onKeyDown={handleUpdatedDone}
        />
      </div>
    </li>
  );
}

export default TodoItem;
