import React from "react";
import TableRow from "../TableRow";
import "./style.css";

const Table = ({ onClickEdit, data }) => {
  return (
    <div>
      <section>
        <h2>Empresas Cadastradas:</h2>

        <table>
          <thead>
            <tr>
              <th>CNPJ</th>
              <th>Nome da Empresa</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody id="table-content">
            {data.map((item, index) => {
              return (
                <TableRow
                  key={index}
                  index={index}
                  cnpj={item.cnpj}
                  name={item.name}
                  onClick={onClickEdit}
                />
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};
export default Table;
