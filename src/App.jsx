import { useRef, useState } from "react";
import "./App.css";

function App() {
  //atualizar a tela, atraves de uma mudança se usa o useState
  const [data, setData] = useState([]);
  const cnpjRef = useRef();
  const nameRef = useRef();
  const cepRef = useRef();
  const addressRef = useRef();
  const numberRef = useRef();
  const districtRef = useRef();

  function saveForm(event) {
    event.preventDefault();
    const copyData = [...data];
    /*O método push() adiciona um ou mais elementos ao final 
    de um array e retorna o novo comprimento(lenght) do array.*/
    copyData.push({
      cnpj: cnpjRef.current.value,
      name: nameRef.current.value,
      cep: cepRef.current.value,
      address: addressRef.current.value,
      number: numberRef.current.value,
      district: districtRef.current.value,
    });

    //campos do formulário vázio
    cnpjRef.current.value = "";
    nameRef.current.value = "";
    cepRef.current.value = "";
    addressRef.current.value = "";
    numberRef.current.value = "";
    districtRef.current.value = "";
    //setData está atualizando os dados do data;
    setData(copyData);
    //para pegar o valor atualizado, "procuramos" no data
  }
  console.log(data);
  return (
    <div className="app">
      <form className="form">
        <h1 className="form-title">Formulário de Cadastro</h1>
        <div className="label-div">
          <label>
            CNPJ:
            <input type="number" id="cnpj" required ref={cnpjRef} />
          </label>

          <label>
            Nome da empresa:
            <input type=" text" id="nomeEmpresa" required ref={nameRef} />
          </label>

          <label>
            CEP:
            <input type="number" id="cep" required ref={cepRef} />
          </label>

          <label>
            Endereço:
            <input type=" text" id="address" required ref={addressRef} />
          </label>

          <label>
            Número:
            <input
              type="number"
              className="input-number"
              required
              ref={numberRef}
            />
          </label>

          <label>
            Bairro:
            <input type="text" id="district" required ref={districtRef} />
          </label>
          <div className="actions-wrapper">
            <label className="label-uf-city">
              UF:
              <select id="select-uf">
                <option>Insira o CEP</option>
              </select>
            </label>

            <label className="label-uf-city">
              cidade:
              <select id="select-city">
                <option>Insira o CEP</option>
              </select>
            </label>
          </div>

          <div className="actions-wrapper">
            <button className="btn-cancel">Limpar</button>
            <button className="btn-save" onClick={(event) => saveForm(event)}>
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
          <tbody id="table-content">
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.cnpj}</td>
                  <td>{item.name}</td>
                  <a href="#">Edit</a>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
