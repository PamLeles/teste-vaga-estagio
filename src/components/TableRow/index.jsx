import React from "react";

const TableRow = ({ index, cnpj, name, onClick }) => {
  return (
    <tr>
      <td>{cnpj}</td>
      <td>{name}</td>
      <td>
        <a href="#" onClick={() => onClick(index)}>
          Edit
        </a>
      </td>
    </tr>
  );
};
export default TableRow;
