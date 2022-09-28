import React, { useState, useRef } from "react";
import handleValidateCep from "../../helpers/handleValidateCep";
import { handleValidateCnpj } from "../../helpers/handleValidateCnpj";
import handleValidateName from "../../helpers/handleValidateName";
import sanitizer from "../../helpers/sanitizer";
import Input from "../Input";
import Select from "../Select";
import "./style.css";

const Form = ({
  onSaveForm,
  cnpjRef,
  nameRef,
  cepRef,
  addressRef,
  numberRef,
  districtRef,
  setOptions,
  selectOptionUf,
  selectOptionCity,
}) => {
  const ufRef = useRef();
  const cityRef = useRef();

  function handleSaveForm(event) {
    event.preventDefault();

    const isValidCnpj = handleValidateCnpj(cnpjRef.current.value);
    const isValidName = handleValidateName(nameRef.current.value);
    /* essa validaçõa vai funcionar quando for clicada em edit e for salva a nova atualização*/
    if (isValidCnpj && isValidName) {
      const newData = {
        cnpj: cnpjRef.current.value,
        name: sanitizer(nameRef.current.value),
        cep: cepRef.current.value,
        address: addressRef.current.value,
        number: numberRef.current.value,
        district: districtRef.current.value,
        city: cityRef.current.value,
        uf: ufRef.current.value,
      };

      //campos do formulário vázio
      cnpjRef.current.value = "";
      nameRef.current.value = "";
      cepRef.current.value = "";
      addressRef.current.value = "";
      numberRef.current.value = "";
      districtRef.current.value = "";
      //setData está atualizando os dados do data;
      onSaveForm(newData);
    }
  }

  function handleBlurCnpj(event) {
    const isValid = handleValidateCnpj(event.target.value);
    if (!isValid) {
      event.target.classList.add("invalid-field");
      return;
    }
    event.target.classList.remove("invalid-field");
  }

  function handleBlurName(event) {
    const isValid = handleValidateName(event.target.value);
    if (!isValid) {
      event.target.classList.add("invalid-field");
      return;
    }
    event.target.classList.remove("invalid-field");
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
    setOptions(data.localidade, data.uf);
  }

  async function checkCep(event) {
    event.preventDefault();

    const cepInput = event.target.value;

    const isValidCep = handleValidateCep(cepInput);

    if (!isValidCep) {
      event.target.classList.add("invalid-field");
      return;
    }
    event.target.classList.remove("invalid-field");

    const data = await getAddressDataByCep(cepInput);

    handleSetFieldsValue(data);
  }

  return (
    <div>
      <form className="form">
        <h1 className="form-title">Formulário de Cadastro</h1>
        <div className="label-div">
          <Input
            label="CNPJ"
            type="number"
            id="cnpj"
            ref={cnpjRef}
            onBlur={handleBlurCnpj}
          />
          <Input
            label="Nome da Empresa"
            type="text"
            id="nomeEmpresa"
            ref={nameRef}
            onBlur={handleBlurName}
          />
          <Input
            label="CEP: "
            type="number"
            id="cep"
            ref={cepRef}
            onBlur={async (event) => await checkCep(event)}
          />
          <Input label="Endereço: " type="text" id="address" ref={addressRef} />
          <Input
            label="Número: "
            type="number"
            className="input-number"
            ref={numberRef}
          />
          <Input label="Bairro: " type="text" id="district" ref={districtRef} />
        </div>

        <div className="actions-wrapper">
          <Select
            label="UF"
            ref={ufRef}
            text={selectOptionUf || "Insira o CEP"}
            value={!!selectOptionUf && selectOptionUf}
          />
          <Select
            label="Cidade"
            ref={cityRef}
            text={selectOptionCity || "Insira o CEP"}
            value={!!selectOptionCity && selectOptionCity}
          />
        </div>
        <div className="actions-wrapper">
          <button className="btn-cancel">Limpar</button>
          <button className="btn-save" onClick={handleSaveForm}>
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
