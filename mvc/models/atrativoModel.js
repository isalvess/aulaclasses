class Atrativos{
    nome
    foto
    lat
    long
    desc

    constructor(nome,desc){
        this.nome = nome
        this.desc = desc
    }
    cadastrarAtrativo(){
        console.log("Atrativo cadastrado!")
    }
    deletarAtrativo(){
        console.log("Atrativo deletado!")
    }
    atualizarAtrativo(){
        console.log("Atrativo atualizado!")
    }
    buscarAtrativo(){
        console.log("Atrativo encontrado!")
    }
    buscarTodosAtrativos(){
        console.log("Aqui estão todos os atrativos")
    }
}
module.exports = Atrativos