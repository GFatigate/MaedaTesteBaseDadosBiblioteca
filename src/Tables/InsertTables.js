const db = require("../Conexao/db");

async function insertBiblioteca(biblioteca){
    const conn = await db.connect();
    const sql = 'INSERT INTO biblioteca(descricao,endereco) VALUES (?,?);';
    const values = [biblioteca.descricao, biblioteca.endereco];
    return await conn.query(sql, values);
}

async function insertAssociados(associados){
    const conn = await db.connect();
    const sql = 'INSERT INTO associados(nome, sexo) VALUES (?,?);';
    const values = [associados.nome, associados.sexo];
    return await conn.query(sql, values);
}

async function insertLivros(livro){
    const conn = await db.connect();
    const sql = 'INSERT INTO livros(isbn, titulo) VALUES (?,?);';
    const values = [livro.isbn, livro.titulo];
    return await conn.query(sql, values);
}

async function insertAutores(autores){
    const conn = await db.connect();
    const sql = 'INSERT INTO autores(nome) VALUES (?);';
    const values = [autores.nome];
    return await conn.query(sql, values);
}

async function insertAssunto(assunto){
    const conn = await db.connect();
    const sql = 'INSERT INTO assunto(descricao) VALUES (?);';
    const values = [assunto.descricao];
    return await conn.query(sql, values);
}

async function insertBibliotecaXassociado(bibliotecaXassociado){
    const conn = await db.connect();
    const sql = 'INSERT INTO bibliotecaXassociado(codBiblioteca, matricula) VALUES (?,?);';
    const values = [bibliotecaXassociado.codBiblioteca, bibliotecaXassociado.matricula];
    return await conn.query(sql, values);
}

async function insertBibliotecaXlivros(bibliotecaXlivros){
    const conn = await db.connect();
    const sql = 'INSERT INTO bibliotecaXlivros(codBiblioteca, isbn) VALUES (?,?);';
    const values = [bibliotecaXlivros.codBiblioteca, bibliotecaXlivros.isbn];
    return await conn.query(sql, values);
}

async function insertAssociadosXlivros(associadosXlivros){
    const conn = await db.connect();
    const sql = 'INSERT INTO associadosXlivros(matricula, isbn) VALUES (?,?);';
    const values = [associadosXlivros.matricula, associadosXlivros.isbn];
    return await conn.query(sql, values);
}

async function insertLivrosXautores(livrosXautores){
    const conn = await db.connect();
    const sql = 'INSERT INTO livrosXautores(isbn, codAutores) VALUES (?,?);';
    const values = [livrosXautores.isbn, livrosXautores.codAutores];
    return await conn.query(sql, values);
}

async function insertLivrosXassunto(livrosXassunto){
    const conn = await db.connect();
    const sql = 'INSERT INTO livrosXassunto(isbn, codAssunto) VALUES (?,?);';
    const values = [livrosXassunto.isbn, livrosXassunto.codAssunto];
    return await conn.query(sql, values);
}

module.exports = {insertBiblioteca, insertAssociados, insertLivros, insertAutores, insertAssunto, insertBibliotecaXassociado, insertBibliotecaXlivros, insertAssociadosXlivros, insertLivrosXautores, insertLivrosXassunto};
