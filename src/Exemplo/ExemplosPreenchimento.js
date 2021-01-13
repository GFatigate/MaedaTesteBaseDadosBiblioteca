
    ///////////////// Insert Test
    const ITables = require("./Tables/InsertTables")
    /* BIBLIOTECA */
    await ITables.insertBiblioteca({descricao: "biblioteca1", endereco: "rua um"});
    await ITables.insertBiblioteca({descricao: "biblioteca2", endereco: "rua dois"});
    await ITables.insertBiblioteca({descricao: "biblioteca3", endereco: "rua tres"});
    /* ASSOCIADOS */
    await ITables.insertAssociados({nome: "Gustavo", sexo: "masculino"});
    await ITables.insertAssociados({nome: "Ela", sexo: "Feminino"});
    await ITables.insertAssociados({nome: "ema", sexo: "Feminino"});
    /* LIVROS */
    await ITables.insertLivros({isbn: 1111, titulo: "Eneiada"});
    await ITables.insertLivros({isbn: 2222, titulo: "Os Lusiadas"});
    await ITables.insertLivros({isbn: 3333, titulo: "Os Miseraveis"});
    await ITables.insertLivros({isbn: 4444, titulo: "Dom Quixote"});
    await ITables.insertLivros({isbn: 5555, titulo: "Lira dos 20 Anos"});
    await ITables.insertLivros({isbn: 6666, titulo: "Capitães da Areia"});
    await ITables.insertLivros({isbn: 8888, titulo: "Arte da Guerra"});
    await ITables.insertLivros({isbn: 9999, titulo: "O Pricipe"});
    await ITables.insertLivros({isbn: 1010, titulo: "O Capital"});
    await ITables.insertLivros({isbn: 1212, titulo: "A Divina Comedia"});
    /* AUTORES */
    await ITables.insertAutores({nome: "Homero"});
    await ITables.insertAutores({nome: "Camoes"});
    await ITables.insertAutores({nome: "Victor Hugo"});
    await ITables.insertAutores({nome: "Miguel de Cervantes"});
    await ITables.insertAutores({nome: "Álvares de Azevedo"});
    await ITables.insertAutores({nome: "Jorge Amado"});
    await ITables.insertAutores({nome: "Sun Tzu"});
    await ITables.insertAutores({nome: "Nicolau Maquiavel"});
    await ITables.insertAutores({nome: "Karl Marx"});
    await ITables.insertAutores({nome: "Dante Alighieri"});
    /* ASSUNTO */
    await ITables.insertAssunto({descricao: "Classico"});
    await ITables.insertAssunto({descricao: "Auto Ajuda"});
    await ITables.insertAssunto({descricao: "Economia"});
    await ITables.insertAssunto({descricao: "Romance"});
    await ITables.insertAssunto({descricao: "Poesia"});
    await ITables.insertAssunto({descricao: "Fantasia"});

    ///////////////// Delete Test
    var result = await DTables.deleteBiblioteca(1);
    var result = await DTables.deleteAssociados(1);
    var result = await DTables.deleteLivro(0000);
    var result = await DTables.deleteAutores(1);
    var result = await DTables.deleteAssunto(1);
    var result = await DTables.deleteBibliotecaXassociado(1, 3);
    var result = await DTables.deleteBibliotecaXlivros(1, 0);
    var result = await DTables.deleteLivrosXassunto(0, 3);
    var result = await DTables.deleteLivrosXautores(2356, 2);
    var result = await DTables.deleteAssociadosXlivros(1, 0000);
    
    //////////////////// Select Test
    result = await STables.selectBiblioteca();
    console.log(result);
    result = await STables.selectAssociados();
    console.log(result);
    result = await STables.selectLivros();
    console.log(result);
    result = await STables.selectAutores();
    console.log(result);
    result = await STables.selectAssunto();
    console.log(result);
    result = await STables.selectBibliotecaXassociado();
    console.log(result);
    result = await STables.selectBibliotecaXlivros();
    console.log(result);
    result = await STables.selectLivrosXassunto();
    console.log(result);
    result = await STables.selectLivrosXautores();
    console.log(result);
    result = await STables.selectAssociadosXlivros();
    console.log(result);


    ///////////////////// Update Test
    var result = await UpTable.updateBiblioteca(2, {descrição: "teste", endereco: "outra rua"});
    console.log(result);
    result = await UpTable.updateAssociados(3, {nome: "Elton", sexo: "masculino"});
    console.log(result);
    result = await UpTable.updateLivros(1234, "odisseia");
    console.log(result);
    result = await UpTable.updateAutores(3, "Cecilia");
    console.log(result);
    result = await UpTable.updateAssunto(2, "fantasia");
    console.log(result);