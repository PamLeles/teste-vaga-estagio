# Teste para vaga de estágio FMConsult

<p  align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML
- CSS
- JavaScript

### 📜 Biblioteca

- React-Js

## 💻 Projeto

O Formulário é uma aplicação para salvar dados da empresa e armazená-los dentro da tabela.
Dentros dos campos foi feita uma validação para verificar se os dados foram preenchidos de forma correta.

### Funcionalidades:

- Cnpj deve conter 14 números, não pode haver repetições como por exemplo:

```
   "00000000000000" ||
   "11111111111111" ||
   "22222222222222" ||
   "33333333333333" ||
   "44444444444444" ||
   "55555555555555" ||
   "66666666666666" ||
   "77777777777777" ||
   "88888888888888" ||
   "99999999999999"
```

- Nome da Empresa deve ser acima de 3 letras;
- CEP deve conter 8 números e corresponder com um endereço real, para essa validação é utilizada a API <a src="https://viacep.com.br/">ViaCep</a>. Ao preencher o cep os campos (endereço, bairro, UF e Cidade) são automaticamente completados.
- Botão de editar: Ao clicar no botão de editar os dados são preenchidos na tabela, dessa forma podendo ser atualizados ao salvar.
- Botão de limpar: limpa os campos do formulário.
- Site com o design 100% Responsivo.

### O projeto foi construido com React utlizando hooks:

<ul>
<li> useState</li>
<li> useRef</li>
</ul>

---

## Como rodar localmente:

1. Faça o clone deste repositório executando em seu terminal o comando:

```bash
git clone https://github.com/PamLeles/teste-vaga-estagio.git
```

2. Instale as dependências do projeto rodando:

```bash
cd teste-vaga-estagio && npm install
```

3. Rode o projeto e seja feliz com:

```bash
npm run dev
```

---

## 💻 Layout

<p> Para ver o layout do app funcionando, basta clicar na imagem abaixo: ⬇️⬇️ </p>

[![miniatura do app](https://github.com/PamLeles/teste-vaga-estagio/blob/main/public/assets/miniatura.png)](https://teste-vaga-estagio.vercel.app/)

---
