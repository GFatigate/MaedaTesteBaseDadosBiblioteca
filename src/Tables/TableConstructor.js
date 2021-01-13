async function createTables(){
    const db = require("../Conexao/db");
    const conn = await db.connect();
    
    var sql = 'CREATE TABLE IF NOT EXISTS biblioteca (codBiblioteca INT AUTO_INCREMENT PRIMARY KEY, descricao VARCHAR(255), endereco VARCHAR(255));';
    conn.query(sql);
    sql = 'CREATE TABLE IF NOT EXISTS associados (matricula INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255), sexo VARCHAR(255));';
    conn.query(sql);
    sql = 'CREATE TABLE IF NOT EXISTS livros (isbn INT PRIMARY KEY, titulo VARCHAR(255));';
    conn.query(sql);
    sql = 'CREATE TABLE IF NOT EXISTS autores (codAutores INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(255));';
    conn.query(sql);
    sql = 'CREATE TABLE IF NOT EXISTS assunto (codAssunto INT AUTO_INCREMENT PRIMARY KEY, descricao VARCHAR(255));';
    conn.query(sql);
    sql = 'CREATE TABLE IF NOT EXISTS bibliotecaXassociado (codBiblioteca INT , matricula INT);';
    conn.query(sql);
    sql = 'CREATE TABLE IF NOT EXISTS bibliotecaXlivros (codBiblioteca INT, isbn INT);';
    conn.query(sql);
    sql = 'CREATE TABLE IF NOT EXISTS associadosXlivros (matricula INT, isbn INT);';
    conn.query(sql);
    sql = 'CREATE TABLE IF NOT EXISTS livrosXautores (isbn INT , codAutores INT);';
    conn.query(sql);
    sql = 'CREATE TABLE IF NOT EXISTS livrosXassunto (isbn INT, codAssunto INT);';
    conn.query(sql);
}

module.exports = {createTables};