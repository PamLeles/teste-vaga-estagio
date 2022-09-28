import React from "react";
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
                <tr key={index}>
                  <td>{item.cnpj}</td>
                  <td>{item.name}</td>
                  <td>
                    <a href="#" onClick={() => onClickEdit(index)}>
                      Edit
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Table;
