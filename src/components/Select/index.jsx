import React from "react";
import "./style.css";

const Select = React.forwardRef(({ label, value, text }, ref) => {
  return (
    <label className="label-uf-city">
      {label}
      <select id="select-uf" ref={ref}>
        <option value={value}>{text}</option>
      </select>
    </label>
  );
});
export default Select;
