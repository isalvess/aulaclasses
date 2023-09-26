class Moeda{
    nome
    valor
    imagem

    constructor(nome,valor){
        this.nome = nome
        this.valor = valor
    }

    cadastrarMoeda(){
        console.log("Moeda cadastrada!")
    }
    deletarMoeda(){
        console.log("Moeda deletada!")
    }
    atualizarMoeda(){
        console.log("Moeda atualizada!")
    }
    buscarMoeda(){
        console.log("Moeda encontrada!")
    }
    buscarTodasMoedas(){
        console.log("Todas as moedas foram encontradas!")
    }
}
module.exports = Moeda
