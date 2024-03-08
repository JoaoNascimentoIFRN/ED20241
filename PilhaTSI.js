//CommonsJS
const Vetor = require("./ClasseVetor");

class PilhaTSI {
    constructor(){
        this.vetor = new Vetor();        
    }

    push(valor){
        this.vetor.inserirFinal(valor);
    }
}