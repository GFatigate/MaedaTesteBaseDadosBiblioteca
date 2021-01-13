async function main(){
    const Tables  = require("./Tables/TableConstructor")
    await Tables.createTables();
}

async function emprestimoLivro(isbn, matricula){
    const STables = require("./Tables/SelectTables")
    const ITables = require("./Tables/InsertTables")

    const result = await STables.selectAssociadosXlivros(isbn);
    const associados = await STables.selectAssociados(matricula)
    const livro = await STables.selectLivros(isbn)

    if(!result.length && associados.length && livro.length){
        await ITables.insertAssociadosXlivros({matricula: matricula, isbn: isbn});
        return 1;
    }
    return 0;
}

async function cadastroAutorLivro(isbn, codAutores){
    const STables = require("./Tables/SelectTables")
    const ITables = require("./Tables/InsertTables")

    const result = await STables.selectLivrosXautores(isbn, codAutores)
    const autores = await STables.selectAutores(codAutores)
    const livro = await STables.selectLivros(isbn)

    if(!result && autores.length && livro.length){
        await ITables.insertLivrosXautores({isbn: isbn, codAutores: codAutores});
        return 1;
    }
    return 0;
}

async function cadastroAssuntoLivro(isbn, codAssunto){
    const STables = require("./Tables/SelectTables")
    const ITables = require("./Tables/InsertTables")

    const result = await STables.selectLivrosXassunto(isbn, codAssunto)
    const assunto = await STables.selectAssunto(codAssunto)
    const livro = await STables.selectLivros(isbn)

    if(!result && assunto.length && livro.length){
        await ITables.insertLivrosXassunto({isbn: isbn, codAssunto: codAssunto});
        return 1;
    }
    return 0;
}

async function cadastroBibliotecaLivro(codBiblioteca, isbn){
    const STables = require("./Tables/SelectTables")
    const ITables = require("./Tables/InsertTables")
    
    const result = await STables.selectBibliotecaXlivros(null, isbn);
    const biblioteca = await STables.selectBiblioteca(codBiblioteca)
    const livro = await STables.selectLivros(isbn)
    
    if(!result.length && biblioteca.length && livro.length){
        await ITables.insertBibliotecaXlivros({codBiblioteca: codBiblioteca, isbn: isbn});
        return 1;
    }
    return 0;
}

async function cadastroBibliotecaAssociado(codBiblioteca, matricula){
    const STables = require("./Tables/SelectTables")
    const ITables = require("./Tables/InsertTables")

    const result     = await STables.selectBibliotecaXassociado(codBiblioteca, matricula)
    const biblioteca = await STables.selectBiblioteca(codBiblioteca)
    const associados = await STables.selectAssociados(matricula)

    if(!result.length && biblioteca.length && associados.length){
        await ITables.insertBibliotecaXassociado({codBiblioteca: codBiblioteca, matricula: matricula});
        return 1;
    }
    return 0;
}

module.exports = {main};