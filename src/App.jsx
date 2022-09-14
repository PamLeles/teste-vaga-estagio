import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div class="app">
      <form class="form">
        <h1 class="form-title">Formulário de Cadastro</h1>
        <div class="label-div">
          <label>
            CNPJ:
            <input type="number" id="cnpj" required />
          </label>

          <label>
            Nome da empresa:
            <input type=" text" id="name" required />
          </label>

          <label>
            CEP:
            <input type="number" id="cep" required />
          </label>

          <label>
            Endereço:
            <input type=" text" id="address" required />
          </label>

          <label>
            Número:
            <input type="number" class="input-number" required />
          </label>

          <label>
            Bairro:
            <input type="text" id="district" required />
          </label>
          <div class="actions-wrapper">
            <label class="label-uf-city">
              UF:
              <select id="select-uf">
                <option value="" disabled selected>
                  Insira o CEP
                </option>
              </select>
            </label>

            <label class="label-uf-city">
              cidade:
              <select id="select-city">
                <option value="" disabled selected>
                  Insira o CEP
                </option>
              </select>
            </label>
          </div>

          <div class="actions-wrapper">
            <button class="btn-cancel">Limpar</button>
            <button class="btn-save" onclick="saveForm(event)">
              Salvar
            </button>
          </div>
        </div>
      </form>

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
          <tbody id="table-content"></tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
