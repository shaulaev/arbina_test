import React, { useState } from "react";
import { useDispatch } from "react-redux";
import cl from "./Header.module.css";

export default function Header() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    dispatch({ type: "SEARCH", payload: e.target.value });
  };

  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch({ type: "ADD_TO_LIST", payload: text });
  };

  return (
    <div className={cl.header}>
      <div className={cl.content}>
        <div className={cl.form}>
          <input
            className={cl.input}
            onChange={(e) => handleChange(e)}
            type="text"
            value={text}
          />
          <button
            disabled={text ? false : true}
            className={cl.plus}
            onClick={handleAdd}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
