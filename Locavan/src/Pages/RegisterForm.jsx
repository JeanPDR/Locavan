import React, { useState } from "react";

const RegisterForm = () => {
  const [userType, setUserType] = useState("motorista");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Tipo de usuário: ${userType}`);
    console.log(`Nome: ${nome}`);
    console.log(`Email: ${email}`);
    console.log(`Telefone: ${telefone}`);
    // Aqui você pode enviar os dados para seu back-end e salvar no banco de dados MySQL
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tipo de usuário:
        <select value={userType} onChange={(event) => setUserType(event.target.value)}>
          <option value="motorista">Motorista</option>
          <option value="passageiro">Passageiro</option>
        </select>
      </label>
      <br />
      <label>
        Nome:
        <input type="text" value={nome} onChange={(event) => setNome(event.target.value)} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <br />
      <label>
        Telefone:
        <input type="tel" value={telefone} onChange={(event) => setTelefone(event.target.value)} />
      </label>
      <br />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default RegisterForm;