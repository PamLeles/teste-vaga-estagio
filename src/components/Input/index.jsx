import React from "react";

const Input = React.forwardRef(
  ({ label, id, type, onBlur, className }, ref) => {
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
  }
);

export default Input;
