const mysql = require("mysql2");
const express = require("express");
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "seu_usuario",
  password: "sua_senha",
  database: "nome_do_seu_banco_de_dados",
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Banco de dados conectado com sucesso!");
});


app.use(express.json());

app.post("/usuarios", (req, res) => {
  const { userType, nome, email, telefone } = req.body;
  const sql = `
    INSERT INTO usuarios (tipo, nome, email, telefone)
    VALUES (?, ?, ?, ?)
  `;
  const data = [userType, nome, email, telefone];
  connection.query(sql, data, (error, results) => {
    if (error) throw error;
    res.send("Usuário cadastrado com sucesso!");
  });
});

app.listen(3000, () => {
  console.log("API rodando na porta 3000");
});