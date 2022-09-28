import React from "react";
import { useRef } from "react";
import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/table";

function App() {
  //atualizar a tela, atraves de uma mudança se usa o useState
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectOptionUf, setSelectOptionUf] = useState(null);
  const [selectOptionCity, setSelectOptionCity] = useState(null);
  const cnpjRef = useRef();
  const nameRef = useRef();
  const cepRef = useRef();
  const addressRef = useRef();
  const numberRef = useRef();
  const districtRef = useRef();

  function handleSaveForm(newData) {
    const copyData = [...data];
    if (typeof selectedRow === "number") {
      Object.assign(copyData[selectedRow], newData);
    } else {
      copyData.push(newData);
    }

    setSelectOptionCity(null);
    setSelectOptionUf(null);
    setSelectedRow(null);
    setData(copyData);
  }

  function handleSetOptions(city, uf) {
    setSelectOptionCity(city);
    setSelectOptionUf(uf);
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
    setSelectOptionCity(data[index].city);
    setSelectOptionUf(data[index].uf);
  }

  return (
    <div className="app">
      <Form
        data={data}
        onSaveForm={handleSaveForm}
        cnpjRef={cnpjRef}
        nameRef={nameRef}
        cepRef={cepRef}
        addressRef={addressRef}
        numberRef={numberRef}
        districtRef={districtRef}
        selectOptionUf={selectOptionUf}
        selectOptionCity={selectOptionCity}
        selectedRow={selectedRow}
        setOptions={handleSetOptions}
      />
      <Table data={data} onClickEdit={handleEdit} />
    </div>
  );
}

export default App;
