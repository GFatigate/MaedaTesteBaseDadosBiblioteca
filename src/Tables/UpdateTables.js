const db = require("../Conexao/db");

async function updateBiblioteca(codBiblioteca, biblioteca){
    const conn = await db.connect();
    const sql = 'UPDATE biblioteca SET descricao=?, endereco=? WHERE codBiblioteca=?';
    const values = [biblioteca.descricao, biblioteca.endereco, codBiblioteca];
    return await conn.query(sql, values);
}

async function updateAssociados(matricula, associados){
    const conn = await db.connect();
    const sql = 'UPDATE associados SET nome=?, sexo=? WHERE matricula=?';
    const values = [associados.nome, associados.sexo, matricula];
    return await conn.query(sql, values);
}

async function updateLivros(isbn, titulo){
    const conn = await db.connect();
    const sql = 'UPDATE livros SET titulo=? WHERE isbn=?';
    const values = [titulo, isbn];
    return await conn.query(sql, values);
}

async function updateAutores(codAutores, nome){
    const conn = await db.connect();
    const sql = 'UPDATE autores SET nome=? WHERE codAutores=?';
    const values = [nome,  codAutores];
    return await conn.query(sql, values);
}

async function updateAssunto(codAssunto, descricao){
    const conn = await db.connect();
    const sql = 'UPDATE assunto SET descricao=? WHERE codAssunto=?';
    const values = [descricao, codAssunto];
    return await conn.query(sql, values);
}

module.exports = {updateBiblioteca, updateAssociados, updateLivros, updateAutores, updateAssunto};