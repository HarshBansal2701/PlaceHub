import React, { useState, useReducer } from "react";
import "./Input.css";

import { validate } from "../../utils/Validators";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case 'TOUCH':
        return {
            ...state,
            isTouched: true,
        }
    default:
      return state;
  }
};

const Input = ({
  id,
  label,
  element,
  type,
  placeholder,
  rows,
  validators,
  onInput,
  errorText,
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isTouched: false,
    isValid: false,
  });

  const changeHandler = (event) => {
    dispatch({ type: "CHANGE", val: event.target.value , validators: validators});
  };

  const touchHandler = () =>{
    dispatch({
        type: 'TOUCH'
    })
  }

  const ele =
    element === "input" ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        value={inputState.value}
        onBlur={touchHandler}
      />
    ) : (
      <textarea
        id={id}
        rows={rows || 3}
        onChange={changeHandler}
        value={inputState.value}
        onBlur={touchHandler}
      />
    );

  return (
    <div className={`form-control ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
      <label htmlFor={id}>{label}</label>
      {ele}
      {!inputState.isValid && inputState.isTouched && <p>{errorText}</p> }
    </div>
  );
};

export default Input;
