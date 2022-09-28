import React from "react";

const Input = ({ label, id, type, ref, onBlur, className }) => {
  return (
    <label>
      {label}
      <input
        type={type}
        id={id}
        className={className}
        required
        ref={ref}
        onBlur={(event) => {
          !!onBlur && onBlur(event);
        }}
      />
    </label>
  );
};

export default Input;
