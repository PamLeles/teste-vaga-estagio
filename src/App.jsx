import { useRef, useState } from "react";
import "./App.css";

function App() {
  //atualizar a tela, atraves de uma mudança se usa o useState
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const cnpjRef = useRef();
  const nameRef = useRef();
  const cepRef = useRef();
  const addressRef = useRef();
  const numberRef = useRef();
  const districtRef = useRef();
  const ufRef = useRef();
  const cityRef = useRef();

  function saveForm(event) {
    event.preventDefault();
    const copyData = [...data];
    /* essa validaçõa vai funcionar quando for clicada em edit e for salva a nova atualização*/
    if (typeof option === "number") {
      copyData[selectedRow].cnpj = cnpjRef.current.value;
      copyData[selectedRow].name = nameRef.current.value;
      copyData[selectedRow].cep = cepRef.current.value;
      copyData[selectedRow].address = addressRef.current.value;
      copyData[selectedRow].number = numberRef.current.value;
      copyData[selectedRow].district = districtRef.current.value;
      setSelectedRow(null);
    } else {
      /*O método push() adiciona um ou mais elementos ao final 
    de um array e retorna o novo comprimento(lenght) do array.*/
      copyData.push({
        cnpj: cnpjRef.current.value,
        name: nameRef.current.value,
        cep: cepRef.current.value,
        address: addressRef.current.value,
        number: numberRef.current.value,
        district: districtRef.current.value,
        city: cityRef.current.value,
        uf: ufRef.current.value,
      });
    }

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

  function handleValidateCep(cep) {
    return cep.length === 8;
  }

  //adicionando api cep
  const url = "https://viacep.com.br/ws/";
  async function getAddressDataByCep(cepInput) {
    const response = await fetch(`${url}${cepInput}/json`);
    const dataApi = await response.json();
    return dataApi;
  }

  // função que esta setando os dados no campos
  function handleSetFieldsValue(data) {
    addressRef.current.value = data.logradouro;
    districtRef.current.value = data.bairro;
    ufRef.current.value = data.uf;
    cityRef.current.value = data.localidade;
  }

  async function checkCep(event) {
    event.preventDefault();

    const cepInput = event.target.value;

    const isValidCep = handleValidateCep(cepInput);

    if (!isValidCep) {
      ///addIsInvalidFieldClass("cep");
      return;
    }

    const data = await getAddressDataByCep(cepInput);

    console.log(data);

    handleSetFieldsValue(data);
  }

  function handleEdit(index) {
    //[index] = posição dentro do array;
    setSelectedRow(index);
    cnpjRef.current.value = data[index].cnpj;
    nameRef.current.value = data[index].name;
    cepRef.current.value = data[index].cep;
    addressRef.current.value = data[index].address;
    numberRef.current.value = data[index].number;
    districtRef.current.value = data[index].district;
  }

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
            <input
              type="number"
              id="cep"
              required
              ref={cepRef}
              onBlur={async (event) => await checkCep(event)}
            />
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
              <select id="select-uf" ref={ufRef}>
                <option>Insira o CEP</option>
              </select>
            </label>

            <label className="label-uf-city">
              cidade:
              <select id="select-city" ref={cityRef}>
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
                  <td>
                    <a href="#" onClick={() => handleEdit(index)}>
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
}

export default App;
