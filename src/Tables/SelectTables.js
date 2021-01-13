const db = require("../Conexao/db");

async function selectBiblioteca(codBiblioteca){
    const conn = await db.connect();
    if(!codBiblioteca){
        const [rows] = await conn.query('SELECT * FROM biblioteca;');
        return rows;
    }
    const sql = 'SELECT * FROM biblioteca where codBiblioteca=?;';
    const [rows] = await conn.query(sql, codBiblioteca);
    return rows;
}

async function selectAssociados(matricula){
    const conn = await db.connect();
    if(!matricula){
        const [rows] = await conn.query('SELECT * FROM associados;');
        return rows;
    }
    const sql = 'SELECT * FROM associados where matricula=?;'
    const [rows] = await conn.query(sql, matricula);
    return rows;
}

async function selectLivros(isbn){
    const conn = await db.connect();

    if(!isbn){
        const [rows] = await conn.query('SELECT * FROM livros;');
        return rows;
    }
    const sql = 'SELECT * FROM livros where isbn=?;'
    const [rows] = await conn.query(sql, isbn);
    return rows;
}

async function selectAutores(codAutores){
    const conn = await db.connect();
    
    if(!codAutores){
        const [rows] = await conn.query('SELECT * FROM autores;');
        return rows;
    }

    const sql = 'SELECT * FROM autores where codAutores=?;';
    const [rows] = await conn.query(sql, codAutores);
    return rows;
}

async function selectAssunto(){
    const conn = await db.connect();
    const [rows] = await conn.query('SELECT * FROM assunto;');
    return rows;
}

async function selectBibliotecaXassociado(codBiblioteca, matricula){
    const conn = await db.connect();
    if(!codBiblioteca && !matricula){
        const [rows] = await conn.query('SELECT * FROM bibliotecaXassociado;');
        return rows;
    }
    
    else if(!matricula){
        const sql = 'SELECT * FROM bibliotecaXassociado where codBiblioteca=?;'
        const [rows] = await conn.query(sql, codBiblioteca);
        return rows;
    }
    else if(!codBiblioteca){
        const sql = 'SELECT * FROM bibliotecaXassociado where matricula=?;'
        const [rows] = await conn.query(sql, matricula);
        return rows;
    }

    const sql = 'SELECT * FROM bibliotecaXassociado where codBiblioteca=? and matricula=?;'
    const values = [codBiblioteca, matricula];
    const [rows] = await conn.query(sql, values);
    return rows;
}

async function selectBibliotecaXlivros(codBiblioteca, isbn){
    const conn = await db.connect();
    if(!codBiblioteca && !isbn){
        const [rows] = await conn.query('SELECT * FROM bibliotecaXlivros;');
        return rows;
    }
    else if(!isbn){
        const sql = 'SELECT * FROM bibliotecaXlivros where codBiblioteca=?;';
        const [rows] = await conn.query(sql, codBiblioteca);
        return rows;
    }
    
    else if(!codBiblioteca){ 
        const sql = 'SELECT * FROM bibliotecaXlivros where isbn=?;';
        const [rows] = await conn.query(sql, isbn);
        console.log(rows)
        return rows;
    }
    
    const sql = 'SELECT * FROM bibliotecaXlivros where codBiblioteca=? AND isbn=?;';
    const values = [codBiblioteca, isbn];
    const [rows] = await conn.query(sql, values);
    return rows;
}

async function selectAssociadosXlivros(isbn){
    const conn = await db.connect();
    const sql = 'SELECT * FROM associadosXlivros where isbn=?;'
    const [rows] = await conn.query(sql, isbn);
    return rows;
}

async function selectLivrosXautores(isbn, codAutores){
    const conn = await db.connect();
    
    if(!isbn && !codAutores){
        const [rows] = await conn.query('SELECT * FROM livrosXautores;');
        return rows;
    }

    const sql = 'SELECT * FROM livrosXautores where isbn=? AND codAutores=?;'
    const values = [isbn, codAutores];
    const [rows] = await conn.query(sql, values);
    return rows;
}

async function selectLivrosXassunto(isbn, codAssunto){
    const conn = await db.connect();
    if(!isbn && !codAssunto){
        const [rows] = await conn.query('SELECT * FROM livrosXassunto;');
        return rows;
    }
    
    const sql = 'SELECT * FROM livrosXassunto where isbn=? AND codAssunto=?;'
    const values = [isbn, codAssunto];
    const [rows] = await conn.query(sql, values);
    return rows;
}


module.exports = {selectBiblioteca, selectAssociados, selectLivros, selectAutores, selectAssunto, selectBibliotecaXassociado, selectBibliotecaXlivros, selectAssociadosXlivros, selectLivrosXautores, selectLivrosXassunto};