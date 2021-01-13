const db = require("../Conexao/db");

async function deleteBiblioteca(codBiblioteca){
    const conn = await db.connect();
    const sql = 'DELETE FROM biblioteca where codBiblioteca=?;';
    return await conn.query(sql, [codBiblioteca]);
}

async function deleteAssociados(matricula){
    const conn = await db.connect();
    const sql = 'DELETE FROM associados where matricula=?;';
    return await conn.query(sql, [matricula]);
}

async function deleteLivro(isbn){
    const conn = await db.connect();
    const sql = 'DELETE FROM livros where isbn=?;';
    return await conn.query(sql, [isbn]);
}

async function deleteAutores(codAutores){
    const conn = await db.connect();
    const sql = 'DELETE FROM autores where codAutores=?;';
    return await conn.query(sql, [codAutores]);
}

async function deleteAssunto(codAssunto){
    const conn = await db.connect();
    const sql = 'DELETE FROM assunto where codAssunto=?;';
    return await conn.query(sql, [codAssunto]);
}

async function deleteBibliotecaXassociado(codBiblioteca, matricula){
    const conn = await db.connect();

    if(!matricula){
        const sql = 'DELETE FROM bibliotecaXassociado where codBiblioteca=?;';
        return await conn.query(sql, matricula);
    }

    else if(!codBiblioteca){
        const sql = 'DELETE FROM bibliotecaXassociado where matricula=?;';
        return await conn.query(sql, codBiblioteca);
    }

    const sql = 'DELETE FROM bibliotecaXassociado where codBiblioteca=? AND matricula=?;';
    const values = [codBiblioteca, matricula];
    return await conn.query(sql, values);
}

async function deleteBibliotecaXlivros(codBiblioteca, isbn){
    const conn = await db.connect();

    if(!isbn){
        const sql = 'DELETE FROM bibliotecaXlivros where codBiblioteca=?;';
        return await conn.query(sql, codBiblioteca);
    }

    else if(!codBiblioteca){
        const sql = 'DELETE FROM bibliotecaXlivros where isbn=?;';
        return await conn.query(sql, isbn);
    }

    const sql = 'DELETE FROM bibliotecaXlivros where codBiblioteca=? AND isbn=?;';
    const values = [codBiblioteca, isbn];
    return await conn.query(sql, values);
}

async function deleteAssociadosXlivros(matricula, isbn){
    const conn = await db.connect();
    
    if(!isbn){
        const sql = 'DELETE FROM associadosXlivros where matricula=?;';
        return await conn.query(sql, matricula);
    }

    else if(!matricula){
        const sql = 'DELETE FROM associadosXlivros where isbn=?;';
        return await conn.query(sql, isbn);
    }

    const sql = 'DELETE FROM associadosXlivros where matricula=? AND isbn=?;';
    const values = [matricula, isbn];
    return await conn.query(sql, values);
}

async function deleteLivrosXautores(isbn, codAutores){
    const conn = await db.connect();
    
    if(!codAutores){
        const sql = 'DELETE FROM livrosXautores where isbn=?;';
        return await conn.query(sql, isbn);
    }

    else if(!isbn){
        const sql = 'DELETE FROM livrosXautores where codAutores=?;';
        return await conn.query(sql, codAutores);
    }

    sql = 'DELETE FROM livrosXautores where isbn=? AND codAutores=?;';
    const values = [isbn, codAutores];
    return await conn.query(sql, values);
}

async function deleteLivrosXassunto(isbn, codAssunto){
    const conn = await db.connect();

    if(!codAssunto){
        const sql = 'DELETE FROM livrosXassunto where isbn=?;';
        return await conn.query(sql, isbn);
    }

    else if(!isbn){
        const sql = 'DELETE FROM livrosXassunto where codAssunto=?;';
        return await conn.query(sql, codAssunto);
    }

    const sql = 'DELETE FROM livrosXassunto where isbn=? AND codAssunto=?;';
    const values = [isbn, codAssunto];
    return await conn.query(sql, values);
}
module.exports = {deleteBiblioteca, deleteAssociados, deleteLivro, deleteAutores, deleteAssunto, deleteBibliotecaXassociado, deleteBibliotecaXlivros, deleteAssociadosXlivros, deleteLivrosXautores, deleteLivrosXassunto};