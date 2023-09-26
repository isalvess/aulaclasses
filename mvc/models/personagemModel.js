class Personagem{

    nome
    startMoeda
    genero
    tipo
    lat
    long
    cor

    constructor(tipo,cor,nome){
        this.tipo = tipo
        this.cor = cor 
        this.nome = nome
    }

    andar(){
        console.log("Andou!")
    }
    pegarInformacao(){
        return{
            "nome" : this.nome,
            "cor" : this.cor,
            "tipo" : this.tipo
        }
    }
    cadastrarPersonagem(){
        console.log("Personagem cadastrado!")
    }
    deletarPersonagem(){
        console.log("Personagem deletado!")
    }
    atualizarPersonagem(){
        console.log("Personagem atualizado!")
    }
    buscarMoeda(){
        console.log("Personagem encontrado!")
    }
    buscarTodasMoedas(){
        console.log("Todos os personagens foram encontrados!")
    }

}
module.exports = Personagem